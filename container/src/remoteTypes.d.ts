declare module 'marketting/MarkettingApp' {
  export const mount: (
    el: Element,
    opts: { onNavigate: (update: import('history').Update) => void }
  ) => { onParentNavigate: (location: import('history').Location) => void };
}

declare module 'authApp/AuthApp' {
  export const mount: any;
}
