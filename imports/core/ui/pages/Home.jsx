import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../api/redux/actions';

class HomeComponent extends PureComponent {

  static propTypes = {
    core: PropTypes.object.isRequired,
    incrementClickCount: PropTypes.func.isRequired,
  };

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

const mapStateToProps = state => ({ core: state.core });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
