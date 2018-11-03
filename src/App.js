import React, { Component } from 'react';
import './App.css';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { updateUser, apiRequest} from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  componentDidMount() {
    this.props.onApiRequest()
  }
  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value)
  }
  render() {
    return (
      <div className="App">
        <div onClick={this.onUpdateUser}>Update User</div>
        <input onChange={this.onUpdateUser}/>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}`
  }
}

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
}

export default connect(mapStateToProps, mapActionsToProps) (App);
