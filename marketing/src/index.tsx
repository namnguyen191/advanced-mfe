// import('./bootstrap').then(({ mount }) => {
//   const markettingDevRoot = document.getElementById('dev-marketting');

//   if (!markettingDevRoot) throw Error('cannot find element');

//   mount(markettingDevRoot, {
//     onNavigate: () => {}
//   });
// });

async function initApp() {
  const { mount } = await import('./bootstrap');
  const { createBrowserHistory } = await import('history');
  const markettingDevRoot = document.getElementById('dev-marketting');

  if (!markettingDevRoot) throw Error('cannot find element');

  const defaultDevHistory = createBrowserHistory();
  mount(markettingDevRoot, {
    onNavigate: () => {},
    defaultBrowserHistory: defaultDevHistory
  });
}

initApp();

export {};
