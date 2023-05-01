import { Event } from './events';

const listeners: { [id: string]: Array<(...params: unknown[]) => void> } = {};

export function addListener(
  event: Event,
  listener: (...params: unknown[]) => void
) {
  listeners[event] = listeners[event] || [];
  listeners[event].push(listener);
}

export function removeListener(
  event: Event,
  listener: (...params: unknown[]) => void
) {
  const eventListeners = listeners[event];

  if (!eventListeners) return;

  for (let i = eventListeners.length - 1; i >= 0; i--) {
    if (eventListeners[i] === listener) {
      eventListeners.splice(i, 1);
      break;
    }
  }
}

export function removeAllListeners(event: Event) {
  listeners[event] = [];
}

export function notify<T = unknown>(event: Event, ...params: T[]) {
  const eventListeners = listeners[event];

  if (!listeners) return false;

  eventListeners.forEach((fnc) => {
    fnc(...params);
  });

  return true;
}
