import {
  Middleware,
} from 'redux';

declare const sofaSaga: {
  setConfig: (config: object) => void;
  runSaga: (middleware: Middleware) => void;
}

export default sofaSaga;
