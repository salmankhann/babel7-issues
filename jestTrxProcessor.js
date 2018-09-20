var builder = require('jest-trx-results-processor');
var createIfNotExist = require('create-if-not-exist');

// File will be created if it does not exist.
// If the file does exist, it will not be modified.
createIfNotExist('tfs-test-results.trx', '');

var processor = builder({
    outputFile: './tfs-test-results.trx' // this defaults to "test-results.trx"
});

module.exports = processor;
