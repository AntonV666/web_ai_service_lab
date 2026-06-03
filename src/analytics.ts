declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...params: unknown[]) => void;
  }
}

export const YM_COUNTER_ID = Number(import.meta.env.VITE_YANDEX_METRIKA_ID || 0);

export function reachGoal(goal: string) {
  if (!YM_COUNTER_ID || typeof window === 'undefined' || typeof window.ym !== 'function') {
    return;
  }

  window.ym(YM_COUNTER_ID, 'reachGoal', goal);
}
