import React, {Component} from 'react';

class App extends Component {




    constructor(props){
      super(props);
      this.onValueChange = this.onValueChange.bind(this);
      this.onSubmitData = this.onSubmitData.bind(this);
      this.state = {
        username : '',
        password : '',
        isSubmitted: false
      }
    }

     
    onValueChange(e){
      this.setState({
          [e.target.name]: e.target.value
      })
    };

    onSubmitData(){
      this.setState({isSubmitted: true});
        
    }

    render() {
        return (
            <div>
              <form>
                  <input name="username" id="username" placeholder={"Enter Username"} onChange={this.onValueChange} />
                  <input name="password" id="password" placeholder={"Enter Password"}  onChange={this.onValueChange} type="password"/>
                  <button onClick={this.onSubmitData}>Login</button>
              </form>
            </div>
        );
    }
}

export default App;