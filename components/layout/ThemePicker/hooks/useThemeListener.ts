import { useState } from 'react';
import { Event, makeEventNotifier } from 'event-emitter';

export enum ActiveTheme {
  Dark,
  Light,
  Matrix,
}

export const activeThemeEmitter = makeEventNotifier<{
  activeTheme: ActiveTheme | undefined;
}>(Event.Theme);

export const useActiveThemeListener = (
  listener: typeof activeThemeEmitter.notify,
  deps: ReadonlyArray<unknown>
) => {
  activeThemeEmitter.useEventListener(listener, deps);
};

export const useActiveTheme = () => {
  const [activeTheme, setActiveTheme] = useState(ActiveTheme.Dark);

  useActiveThemeListener((event) => {
    if (event.activeTheme === undefined) return;
    setActiveTheme(event.activeTheme);
  }, []);

  return activeTheme;
};
