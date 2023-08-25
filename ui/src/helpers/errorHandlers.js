import { logOut } from 'services/authService';
import { routes } from 'config/index';

export default function onUnauthorized(error, reactRouterHistory) {
  logOut();
  if (reactRouterHistory.location.pathname !== routes.login.path) {
    reactRouterHistory.push(routes.login.path, {
      url: reactRouterHistory.createHref(reactRouterHistory.location),
    });
  }
}
