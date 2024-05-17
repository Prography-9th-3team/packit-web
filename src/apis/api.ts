import _ from 'lodash';
import QueryString from 'qs';

export const urlParams = (obj = {}, nullable = false) => {
  if (nullable) {
    return _.isEmpty(obj) ? '' : '?' + QueryString.stringify(obj);
  }

  const filteredObj = _.omitBy(obj, (value) => _.isNil(value) || _.isNaN(value));

  return _.isEmpty(filteredObj)
    ? ''
    : '?' + QueryString.stringify(filteredObj, { skipNulls: true });
};
