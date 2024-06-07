import _ from 'lodash';
import QueryString from 'qs';

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
export const GOOGLE_LOGIN_URL = process.env.NEXT_PUBLIC_GOOGLE_LOGIN_BASE_URL;

export const urlParams = (obj = {}, nullable = false) => {
  if (nullable) {
    return _.isEmpty(obj) ? '' : '?' + QueryString.stringify(obj);
  }

  const filteredObj = _.omitBy(obj, (value) => _.isNil(value) || _.isNaN(value));

  return _.isEmpty(filteredObj)
    ? ''
    : '?' + QueryString.stringify(filteredObj, { skipNulls: true });
};

const apis = {
  auth: {
    google_login: (redirectUri: string) =>
      `${GOOGLE_LOGIN_URL}/oauth2/authorize/google?redirect_uri=${redirectUri}`,
  },
  bookmark: {
    bookmark_list: '/api/v1/book-mark/list',
  },
};

export default apis;
