import React, { Component } from 'react';
import AuthService from './components/Auth/AuthService';
import withAuth from './components/Auth/withAuth';
import Posts from './components/Posts'
import Postar from './components/Postar'
const Auth = new AuthService();

class App extends Component {
  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
  }
  render() {
    return (
      <div className="logado">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3>BRASILRIDEAPP // ADMIN</h3>
              </div>
              <div className="col-lg-6 text-right">
                <button type="button" className="form-submit btn" onClick={this.handleLogout.bind(this)}>LOGOUT</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
            <Posts />            
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Postar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(App);
