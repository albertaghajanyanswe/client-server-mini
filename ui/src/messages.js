import { en } from 'messages/en.messages';

// This is taken from Intl.getIntlMessages
const messages = {};

messages.get = (path) => {
  // todo: should be changed to be dynamic
  const current = en;
  const pathParts = path.split('.');
  let message;

  try {
    message = pathParts.reduce((obj, pathPart) => obj[pathPart], current);
  } finally {
    if (message === undefined) {
      // eslint-disable-next-line no-unsafe-finally
      throw new ReferenceError(`Could not find Intl message: ${path}`);
    }
  }

  return message;
};

export default messages;
