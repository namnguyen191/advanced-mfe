import('./bootstrap').then(({ mount }) => {
  const containerRoot = document.getElementById('container-root');

  if (!containerRoot) throw Error('cannot find element');

  mount(containerRoot);
});

export {};
