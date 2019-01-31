import { USER_NOT_LOGIN_ERRNO } from './constants';

const defaultConfig = {};

defaultConfig.fetchSuccess = result => (result.errno === 0 || result.errno === '0');

defaultConfig.notification = {
  success: (options) => { console.log(options) },
  error: (options) => { console.log(options) },
};

// 常用错误处理
const noAuth = (result) => {
  if (result.errno === USER_NOT_LOGIN_ERRNO) {
    return true;
  }
  return false;
};

defaultConfig.fetchFailHandlers = [noAuth];


export default defaultConfig;
