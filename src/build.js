const alfy = require('alfy');
const UTIL = require('./util');
const jenkins = require('./jenkins');
const DELAY = UTIL.getEnv('DELAY') || 0;
jenkins.job.build(alfy.input, { delay: `${DELAY}sec`});
