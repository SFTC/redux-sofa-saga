import createSagaMiddleware from 'redux-saga';
import saga, { config as userConfig } from './saga';

const sagaMiddleware = createSagaMiddleware();

const SFSagaMiddleWare = {};
SFSagaMiddleWare.runSaga = (config) => {
  config && userConfig.setConfig(config);
  sagaMiddleware.run(saga);
  return sagaMiddleware.run;
};
SFSagaMiddleWare.middleWare = sagaMiddleware;

export default SFSagaMiddleWare;
