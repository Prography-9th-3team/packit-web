import _ from 'lodash-es';
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
    delete_account: '/api/v1/user/termination',
  },
  bookmark: {
    bookmark_list: '/api/v1/book-mark/list',
    bookmark_save: '/api/v1/book-mark',
    bookmark_like: '/api/v1/book-mark/like',
    bookmark_read: '/api/v1/book-mark/read/count',
    bookmark_delete: '/api/v1/book-mark',
    bookmark_restore: '/api/v1/book-mark/restore',
    bookmark_search: '/api/v1/book-mark/search',
  },
  category: {
    category_list: '/api/v1/category/list',
    category_save: '/api/v1/category',
    category_delete: '/api/v1/category',
    category_edit: '/api/v1/category',
  },
  fileUpload: {
    file: '/file',
    thumbnail: (uuid: string) => `/file/thumb/original/${uuid}`,
  },
  recommend: {
    recommend_bookmarks: '/recommend/book-mark/list',
  },
};

export default apis;
