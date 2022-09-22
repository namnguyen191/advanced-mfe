import('./bootstrap').then(({ mount }) => {
  const markettingDevRoot = document.getElementById('dev-marketting');

  if (!markettingDevRoot) throw Error('cannot find element');

  mount(markettingDevRoot);
});

export {};
