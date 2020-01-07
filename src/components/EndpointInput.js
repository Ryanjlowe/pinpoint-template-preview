import React from 'react';
import {connect} from 'react-redux';
import TypingInput from './TypingInput';
import {selectEndpoint} from '../actions/index';


class EndpointInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      endpointId: '',
      viewJson: false
    };
  }

  endpointIdOnChange(value) {
    this.props.selectEndpoint(value);
  }

  toggleViewJson() {
    this.setState({viewJson: !this.state.viewJson});
  }

  render() {
    console.log(this);

    return (
      <div>
        <div style={{position: 'relative'}}>
          <h3>Enter an Endpoint Id</h3>
          <TypingInput value={this.props.endpointId} onChange={this.endpointIdOnChange.bind(this)} />
          {this.props.endpointId !== '' && this.props.endpoint.Id === '__notfound__' && (
           <span className="endpoint-not-found">Endpoint Not Found</span>
         )}
         {this.props.endpoint.Id !== '__notfound__' && (
          <button onClick={this.toggleViewJson.bind(this)} className="endpoint-json-button">Toggle Endpoint JSON</button>
        )}
        </div>
        {this.state.viewJson && this.props.endpoint.Id !== '__notfound__' && (
         <pre className="endpoint-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(this.props.endpoint, null, 2)}}>

         </pre>
       )}
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    endpointId: state.powerTools.endpointId,
    endpoint: state.powerTools.endpoint,
    appId: state.powerTools.appId,
    region: state.powerTools.region
  };
}


export default connect(mapStateToProps, {selectEndpoint})(EndpointInput);
