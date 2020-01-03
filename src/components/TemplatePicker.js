import React from 'react';
import {connect} from 'react-redux';
import {listTemplates, selectTemplate} from '../actions/index';

class TemplatePicker extends React.Component {

  componentDidMount() {
    this.props.listTemplates();
  }

  templateOnClick(templateName) {
    this.props.selectTemplate(templateName);
  }

  render() {
    console.log(this);
    return (
      <div>
        <h3>Pick a Template</h3>
        <ul className="template-picker">
          {this.props.templates.sort((a, b) => (a.TemplateName > b.TemplateName) ? 1 : -1).map((value, idx) => (
            <li key={idx}><a href="javascript:void()" onClick={this.templateOnClick.bind(this, value.TemplateName)}>{value.TemplateName}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    templates: state.powerTools.templates
  };
}


export default connect(mapStateToProps, {listTemplates, selectTemplate})(TemplatePicker);
