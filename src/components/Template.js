import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import Handlebars from 'handlebars';
import EndpointInput from './EndpointInput';
import {getEndpoint, getTemplate} from '../actions/index';


class Template extends React.Component {

  componentDidMount() {
    console.log(this.props);
    this.props.getEndpoint(this.props.endpointId);
    this.props.getTemplate(this.props.templateName);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    if (prevProps.endpointId !== this.props.endpointId) {
      this.props.getEndpoint(this.props.endpointId);
    }
    if (prevProps.templateName !== this.props.templateName) {
      this.props.getTemplate(this.props.templateName);
    }
  }

  getRando(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  render() {
    console.log(this);

    if (!this.props.templateName || !this.props.template.Subject) {
      return (<div>
        <h3>Select a Template</h3>
      </div>)
    }

    if (!this.props.endpointId) {
      return (<div>
        <EndpointInput />
        <hr />
        <h3>Select an Endpoint</h3>
      </div>)
    }

    const compiledSubject = Handlebars.compile(this.props.template.Subject);

    return (<div className="template-page">
      <EndpointInput />
      <hr />
      <h3>Email Preview</h3>
      <h4>Subject Line</h4>
      <div className="subject" dangerouslySetInnerHTML={{ __html: compiledSubject( this.props.endpoint) }}></div>

      <h4>Email Body</h4>
      <iframe title="email render" src={`/template-render?r=${this.getRando()}`}
        frameBorder="0"
        style={{height: '800px', width: '800px', backgroundColor: '#fff', border: '1px solid #282c34'}} />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    endpointId: state.powerTools.endpointId,
    endpoint: state.powerTools.endpoint,
    template: state.powerTools.template,
    templateName: state.powerTools.templateName,
  };
}


export default withRouter(connect(mapStateToProps, {getEndpoint, getTemplate})(Template));
