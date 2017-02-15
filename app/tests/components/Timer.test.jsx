var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetStatus', () => {
    it('should count seconds', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChanged('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('started');
        done();
      }, 1001);

    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChanged('started');
      timer.handleStatusChanged('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should have count equals to zero on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChanged('started');
      setTimeout(() => {
        timer.handleStatusChanged('stopped');
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);

    });
  });
});
