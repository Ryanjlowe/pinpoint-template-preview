import React from 'react';
import Handlebars from 'handlebars';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import {getEndpoint, getTemplate} from '../actions/index';

class TemplateRender extends React.Component {

  render() {
    console.log(this);

    if (!this.props.template.HtmlPart || !this.props.endpoint.Id) {
      return (<div>
      </div>)
    }

    const compiledTemplate = Handlebars.compile(this.props.template.HtmlPart);

    const endpoint = this.props.endpoint;
    return <div className="template-wrap"><div className="template-ren" dangerouslySetInnerHTML={{ __html: compiledTemplate( endpoint) }} /></div>;
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


export default withRouter(connect(mapStateToProps, {getEndpoint, getTemplate})(TemplateRender));
