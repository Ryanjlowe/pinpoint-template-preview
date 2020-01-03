import React from 'react';
import Handlebars from 'handlebars';
import {connect} from 'react-redux';
import {getEndpoint, getTemplate} from '../actions/index';

const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<p><img src="https://s3.amazonaws.com/039785020456insuranceco/pinpoint/mail.jpeg">Home Remedy for Diabetes</p>
<p>2 tsp apple cider vinegar | 2 tsp natural apple juice| 1⁄2 tsp cinnamon powder|1 small cup of water. Mix all ingredients well. Drink every morning on a regular basis</p>
<p><br></p>
<p>Health fact: Apple cider vinegar aids weight loss, reduces cholesterol and lowers blood sugar levels</p>
<p>Worried about rising blood sugar levels?</p>
<p>Chat with a Diabetologist</p>
<p><a href="http://localhost:8000">Chat now</a></p>
<p>&nbsp;</p>
<p>Copyright 2019, Focus Health Co. All Rights Reserved. Call: +91 8880 588 999&nbsp;<span style="color: rgb(65, 65, 70);">Email: </span><a href="mailto:support@focushealth.com" style="color: rgb(65, 65, 70);">support@focushealth.com </a></p>
<p><br></p>
<p><img src="https://s3.amazonaws.com/039785020456insuranceco/pinpoint/Button.png"></p>
</body>
</html>`;

class TemplateRender extends React.Component {

  componentDidMount() {
    console.log(this.props);
    this.props.getEndpoint(this.props.match.params.endpointId);
    this.props.getTemplate(this.props.match.params.templateName);
  }

  render() {
    console.log(this);

    if (!this.props.template.HtmlPart) {
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
    endpoint: state.powerTools.endpoint,
    template: state.powerTools.template,
  };
}


export default connect(mapStateToProps, {getEndpoint, getTemplate})(TemplateRender);
