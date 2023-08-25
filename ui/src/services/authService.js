import { post } from 'services/client';
import { apiEndpoints } from 'config';


const logOut = () => {
  localStorage.clear();
  // NOTE: to reset store
  window.location.reload();
}
export default {
  login: (username, password) => {
    const options = {
      url: `${apiEndpoints.login}`,
      data : {
        email: username,
        password
      }
    };
    return post(options);
  }
}

export { logOut };