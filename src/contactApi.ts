export async function sendContactForm(payload: {
  company: string;
  contact: string;
  message: string;
  personal_data_consent: boolean;
}) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text);
  }

  return response.json();
}
