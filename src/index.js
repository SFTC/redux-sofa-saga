import saga, { config as userConfig } from './saga';

const sofaSaga = {};

sofaSaga.setConfig = (config) => {
  userConfig.setConfig(config);
};

sofaSaga.runSaga = (sagaMiddleware) => {
  sagaMiddleware.run(saga);
};

export default sofaSaga;
