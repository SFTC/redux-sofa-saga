import createSagaMiddleware from 'redux-saga';
import saga, { config as userConfig } from './saga';

function createSofaSagaMiddleware(config) {
  const sagaMiddleware = createSagaMiddleware();
  setTimeout(() => {
    sagaMiddleware.run(saga);
  }, 200);

  userConfig.setConfig(config);
  return sagaMiddleware;
}

export default createSofaSagaMiddleware;
