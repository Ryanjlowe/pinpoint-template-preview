import React from 'react';
import {connect} from 'react-redux';
import EndpointInput from './EndpointInput';
import {getEndpoint} from '../actions/index';


class Template extends React.Component {

  // componentDidMount() {
  //   this.props.getEndpoint(this.props.endpointId);
  // }

  render() {
    console.log(this);

    if (!this.props.templateName) {
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

    return (<div>
      <EndpointInput />
      <hr />
      <h3 style={{margin: '10px'}}>Email Preview</h3>
      <iframe title="email render" src={`/template-render/${this.props.templateName}/${this.props.endpointId}`}
        frameBorder="0"
        style={{height: '800px', width: '800px', backgroundColor: '#fff', border: '1px solid #282c34'}} />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    endpointId: state.powerTools.endpointId,
    templateName: state.powerTools.templateName,
  };
}


export default connect(mapStateToProps, {getEndpoint})(Template);
