import React from 'react';
import Amplify from 'aws-amplify';
import { connect } from 'react-redux';
import Template from './components/Template';
import TemplateRender from './components/TemplateRender';
import TemplatePicker from './components/TemplatePicker';
import AppChooser from './components/AppChooser';
import './App.css';
import awsconfig from './aws-exports';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Authenticator, SignUp } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';


Amplify.configure(awsconfig);

class App extends React.Component {

  constructor(props) {
    super()
    this.state = {
      auth: 'signIn'
    }
  }

  authStateChange(authState) {
    this.setState({auth: authState});
  }

  render() {

    console.log(this.state);
    return (
      <Authenticator hide={[SignUp]} onStateChange={this.authStateChange.bind(this)}>
        {this.state.auth === 'signedIn' &&
          <Router>
            <Switch>
              <Route path="/template-render">
                <TemplateRender/>
              </Route>
              <Route path="/">
                <div className="App">
                  <header className="App-header">
                    <h1>Pinpoint Template Preview</h1>
                  </header>
                  <div className="row">
                    <div className="template-pick-wrap">
                      <AppChooser />
                      <TemplatePicker />
                    </div>
                    <div className="template">
                      <Template />
                    </div>
                  </div>
                </div>
              </Route>
            </Switch>
          </Router>
        }
      </Authenticator>
    );
  }
}

export default connect()(App);
