import Router from '../../client/helpers/router';

const routes = [
  { name: 'home', path: 'home.html', default: true },
  { name: 'about', path: 'about.html' }
];

export const createRouter = () => {
  return new Router({
    routes,
  });
}
