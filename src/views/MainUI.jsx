import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
//import {BrowserRouter, Link, Route, IndexRoute, Switch} from 'react-router-dom';

class MainUI extends React.Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    loginState: {
      loginData: null,
      loginStatus: false,
      loginError: false
    }
  };

  static propTypes = {
    loginState: PropTypes.object
  };

  componentDidMount() {
  //  this.logIn(null, null, 'login/status');
  }

  render() {
    const pathName = this.props.location.pathName;

    return <div>
      <div>{this.props.children}</div>
    </div>
  }

}

export default withRouter(MainUI);
