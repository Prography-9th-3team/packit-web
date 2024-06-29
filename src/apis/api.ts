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
    user_profile: '/api/v1/user/profile',
  },
  bookmark: {
    bookmark_list: '/api/v1/book-mark/list',
    bookmark_save: '/api/v1/book-mark',
  },
  category: {
    category_list: '/api/v1/category/list',
    category_save: '/api/v1/category',
  },
  fileUpload: {
    file: '/file',
  },
};

export default apis;
