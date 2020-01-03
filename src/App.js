import React from 'react';
import Amplify from 'aws-amplify';
import { connect } from 'react-redux';
import Template from './components/Template';
import TemplateRender from './components/TemplateRender';
import TemplatePicker from './components/TemplatePicker';
import './App.css';
import awsconfig from './aws-exports';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

function App() {
  return (
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
  );
}

const signUpConfig = {
  header: 'Signup Form',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Email Address',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },{
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    }
  ]
};

export default connect()(withAuthenticator(App, { signUpConfig, usernameAttributes: 'Email Address' }));
