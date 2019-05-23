import { module, test } from 'qunit';
import setupSinonGlobalRestoration from 'ember-sinon-qunit/test-support/setup-global-sinon';
import {
  createSandbox,
  restoreSandbox,
} from 'ember-sinon-qunit/test-support/sinon-sandbox';

module('Unit | ember-sinon-qunit | Setup in testStart/testDone', function() {
  test(`configuring setup/restore`, function(assert) {
    assert.expect(4);

    let testStartCalled = false;
    let testDoneCalled = false;

    let qunit = {
      testStart(callback) {
        testStartCalled = true;
        assert.equal(callback, createSandbox);
      },

      testDone(callback) {
        testDoneCalled = true;
        assert.equal(callback, restoreSandbox);
      },
    };

    setupSinonGlobalRestoration(qunit);

    assert.ok(testStartCalled, 'testEnvironment.testStart is called');
    assert.ok(testDoneCalled, 'testEnvironment.testDone is called');
  });
});
