/* global suite, test */

var assert = require('assert');
var isExistingFile = require('../src/isExistingFile')

suite('Is Existing File', function() {
    test('is false for empty document', function() {
        const untitledDocument = {
            uri: {
                scheme: 'untitled'
            }
        }

        assert.equal(isExistingFile(untitledDocument), false)
    });

    test('is true for existing file', function() {
        const untitledDocument = {
            uri: {
                scheme: 'file'
            }
        }

        assert.equal(isExistingFile(untitledDocument), true)
    });
});