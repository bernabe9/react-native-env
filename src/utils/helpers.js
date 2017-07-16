import { Alert } from 'react-native';
import _ from 'lodash';

import {
  defaultError,
  defaultSuccess
} from '../constants/messages';

export const alertErrors = (message = defaultError) => {
  Alert.alert(
    'Error ',
    message,
    [{ text: 'OK' }],
    { cancelable: false }
  );
};

export const alertSuccess = (message = defaultSuccess) => {
  Alert.alert(
    'Success',
    message,
    [{ text: 'OK' }],
    { cancelable: false }
  );
};

export const applyQueryParams = (url, params) => {
  let urlWithQuery = url;
  const validParams = params.filter(param => Boolean(param.value));
  if (!_.isEmpty(validParams)) {
    const first = validParams.shift();
    urlWithQuery = `${urlWithQuery}?${first.prop}=${first.value}`;
    validParams.forEach(({ prop, value }) => {
      urlWithQuery = `${urlWithQuery}&${prop}=${value}`;
    });
  }
  return urlWithQuery;
};
