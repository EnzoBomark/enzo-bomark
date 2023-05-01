import { useEffect } from 'react';
import { addListener, removeListener, notify, Event } from '../event-emitter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useEventListener<T extends (...params: any) => void>(
  event: Event,
  listener: T,
  deps: ReadonlyArray<unknown>
) {
  useEffect(() => {
    addListener(event, listener);

    return () => {
      removeListener(event, listener);
    };
  }, deps);
}

export function makeEventNotifier<P>(name: Event) {
  return {
    name: name,
    notify: (param: P) => {
      notify(name, param);
    },
    useEventListener: (
      listener: (param: P) => void,
      deps: ReadonlyArray<unknown>
    ) => useEventListener(name, listener, deps),
  };
}
