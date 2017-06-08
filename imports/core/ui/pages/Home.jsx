import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { coreActions } from '/imports/core';

class HomeComponent extends PureComponent {
  render() {
    const {
      core: {
        clickCount,
      },
      incrementClickCount,
    } = this.props;
    return (
      <div id="home">
        <h2>Hello world!</h2>
        <p>You clicked <strong>{clickCount}</strong> times</p>
        <button onClick={incrementClickCount}>Click me!</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    core: state.core.toJS(),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(coreActions, dispatch);

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);