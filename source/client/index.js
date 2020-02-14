import Home from '../shared/views/home';
import About from '../shared/views/about';
import NotFound from '../shared/views/not-found';

import Header from '../shared/components/header';

import Helpers from './helpers';

const routes = {
  '/': Home,
  '/about': About
};

const app = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('app');
  //const footer = null || document.getElementById('footer');

  header.innerHTML = await Header.render();
  await Header.after_render();

  const request = Helpers.parseRequestURL();

  const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
  const page = routes[parsedURL] ? routes[parsedURL] : NotFound;

  content.innerHTML = await page.render();
  await page.after_render();
}

// Listen on hash change:
window.addEventListener('hashchange', app);

// Listen on page load:
window.addEventListener('load', app);
