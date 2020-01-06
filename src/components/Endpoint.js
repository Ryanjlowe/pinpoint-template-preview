// import React from 'react';
// import {connect} from 'react-redux';
// import {getEndpoint} from '../actions/index';
//
// class Endpoint extends React.Component {
//
//
//   render() {
//     console.log(this);
//     const endpoint = this.props.endpoint;
//     return (
//       <div>
//         <div>
//           <strong>ChannelType:</strong>
//           <span>{endpoint.ChannelType}</span>
//         </div>
//         <div>
//           <strong>Address:</strong>
//           <span>{endpoint.Address}</span>
//         </div>
//         <div>
//           <strong>EndpointStatus:</strong>
//           <span>{endpoint.EndpointStatus}</span>
//         </div>
//         <div>
//           <strong>OptOut:</strong>
//           <span>{endpoint.OptOut}</span>
//         </div>
//         <div>
//           <strong>Attributes:</strong>
//             {endpoint.Attributes && Object.keys(endpoint.Attributes).map((key) => (
//               <div>
//                 <strong>{key}:</strong>
//                 <span>{endpoint.Attributes[key].join(', ')}</span>
//               </div>
//             ))}
//         </div>
//
//       </div>
//     );
//   }
// }
//
// function mapStateToProps(state) {
//   return {
//     endpoint: state.powerTools.endpoint
//   };
// }
//
//
// export default connect(mapStateToProps, {getEndpoint})(Endpoint);
