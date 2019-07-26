import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userActions from "../store/usuario/actions";

class App extends Component {
  static async getInitialProps({ ctx: { store } }) {
    //Dispara a action no lado do servidor
    store.dispatch(userActions.userRequest());
  }

  render() {
    const { user } = this.props;
    return <div>{user.data.login}</div>;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
