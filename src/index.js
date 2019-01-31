import createSagaMiddleware from 'redux-saga';
import saga from './saga';

function createSofaSagaMiddleware() {
  const sagaMiddleware = createSagaMiddleware();
  setTimeout(() => {
    sagaMiddleware.run(saga);
  }, 200);
  return sagaMiddleware;
}

export default createSofaSagaMiddleware();
