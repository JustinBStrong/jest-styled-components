const toHaveStyleRule = require('./toHaveStyleRule');
const styleSheetSerializer = require('./styleSheetSerializer');
const { resetStyleSheet } = require('./utils');
let test = 'empt'
global.beforeEach(resetStyleSheet);

expect.addSnapshotSerializer(styleSheetSerializer);
expect.extend({ toHaveStyleRule });

module.exports = {
  styleSheetSerializer,
};
