import React, { Component } from 'react'

class Login extends Component {
    state = {  
        username: "",
        password: ""  
    };

    userLogin = e => { 
        e.preventDefault(); 
        if (this.state.username === 'codertex' && this.state.password === '12345')
            console.log('successfully login')
            
    };
    handleTextChange = (e) => { 
        this.setState( {[e.target.name]:e.target.value} ) 
    } 

  render() {
    return (
      <div>
        <form onSubmit={this.userLogin} style={{ width: "350px" }}>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
                type="text"
                className="form-control"
                name="username"
                id="text"
                onChange={this.handleTextChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
                type="password"
                className="form-control"
                name="password" id="pwd"
                onChange={this.handleTextChange} />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
