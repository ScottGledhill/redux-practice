import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateUser} from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  onUpdateUser() {
    this.props.onUpdateUser('idiot')
  }
  render() {
    return (
      <div className="App">
        <div onClick={this.onUpdateUser}>Update User</div>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user
})

const mapActionsToProps = {
  onUpdateUser: updateUser

}

export default connect(mapStateToProps, mapActionsToProps) (App);
