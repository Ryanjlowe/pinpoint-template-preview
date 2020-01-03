import React from 'react';
import {connect} from 'react-redux';
import TypingInput from './TypingInput';
import {selectEndpoint} from '../actions/index';


class EndpointInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      endpointId: ''
    };
  }

  endpointIdOnChange(value) {
    // this.setState({
    //   endpointId: e.target.value
    // });
    this.props.selectEndpoint(value);
  }

  // submitEndpointOnClick() {
  //   this.props.selectEndpoint(this.state.endpointId);
  // }

  render() {
    console.log(this);

    return (
      <div>
        <h3>Enter an Endpoint Id</h3>
        <TypingInput value={this.props.endpointId} onChange={this.endpointIdOnChange.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    endpointId: state.powerTools.endpointId,
    templateName: state.powerTools.templateName,
  };
}


export default connect(mapStateToProps, {selectEndpoint})(EndpointInput);
