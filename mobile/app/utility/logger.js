import Bugsnag from '@bugsnag/expo';

const log = (error) => Bugsnag.notify(error);

const start = () =>
  Bugsnag.start({
    apiKey: '85d79406b0e31b7092b988d52eba8e34',
  });

export default { log, start };
