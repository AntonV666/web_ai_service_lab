import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


class ContactRequest(BaseModel):
    company: str = Field(min_length=2, max_length=200)
    contact: str = Field(min_length=3, max_length=200)
    message: str = Field(min_length=3, max_length=3000)
    personal_data_consent: bool


app = FastAPI(title="AI Service Lab Contact API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:8091",
        "https://ai-service-lab.ru",
        "https://www.ai-service-lab.ru",
    ],
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/contact")
def contact(payload: ContactRequest):
    if not payload.personal_data_consent:
        raise HTTPException(status_code=400, detail="Personal data consent is required")

    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", "465"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    mail_to = os.getenv("CONTACT_MAIL_TO", smtp_user)
    mail_from = os.getenv("CONTACT_MAIL_FROM", smtp_user)

    if not all([smtp_host, smtp_user, smtp_password, mail_to, mail_from]):
        raise HTTPException(status_code=500, detail="SMTP is not configured")

    subject = "Новая заявка с сайта AI Service Lab"

    body = f"""
Новая заявка с сайта AI Service Lab

Имя / компания:
{payload.company}

Контакт:
{payload.contact}

Описание задачи:
{payload.message}

Согласие на обработку персональных данных:
{"Да" if payload.personal_data_consent else "Нет"}
"""

    msg = MIMEMultipart()
    msg["From"] = mail_from
    msg["To"] = mail_to
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain", "utf-8"))

    try:
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(mail_from, [mail_to], msg.as_string())
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Email send failed: {exc}")

    return {"ok": True}
