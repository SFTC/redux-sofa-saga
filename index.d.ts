import { Middleware } from 'redux';

declare const SFSagaMiddleWare: {
  middleWare: Middleware;
  runSaga: (config?: object) => any;
}

export default SFSagaMiddleWare;
