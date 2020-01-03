import axios from 'axios';
import Auth from '@aws-amplify/auth';
import Pinpoint from 'aws-sdk/clients/pinpoint';
import { Signer } from '@aws-amplify/core';

const region = 'us-east-1';

const getPinpointClient = function(){
  return Auth.currentCredentials()
    .then(creds => {
      const pinpoint = new Pinpoint({
        credentials: Auth.essentialCredentials(creds),
        region
      });
      return pinpoint;
    });
}


export function listTemplates() {
  return function (dispatch) {
    return Auth.currentCredentials()
      .then((creds) => {

        const access_info = {
          secret_key: creds.secretAccessKey,
          access_key: creds.accessKeyId,
          session_token: creds.sessionToken,
        };

        const service_info = {
            region: region,
            service: 'mobiletargeting',
        };


        const request = {
          method: 'GET',
          url: `https://pinpoint.${region}.amazonaws.com/v1/templates?template-type=EMAIL`
        }

        const signedRequest = Signer.sign(request, access_info, service_info);
        return axios({...signedRequest});
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: 'LIST_TEMPLATES',
          templates: response.data.Item
        });
      });
  }
}

export function selectTemplate(templateName) {
    return function(dispatch) {
      dispatch({
        type: 'SELECTED_TEMPLATE',
        templateName: templateName
      });
    };
}

export function selectEndpoint(endpointId) {
    return function(dispatch) {
      dispatch({
        type: 'SELECTED_ENDPOINT',
        endpointId: endpointId
      });
    };
}

export function getTemplate(templateName) {
  return function(dispatch) {
    return Auth.currentCredentials()
      .then((creds) => {

        const access_info = {
          secret_key: creds.secretAccessKey,
          access_key: creds.accessKeyId,
          session_token: creds.sessionToken,
        };

        const service_info = {
            region: region,
            service: 'mobiletargeting',
        };


        const request = {
          method: 'GET',
          url: `https://pinpoint.${region}.amazonaws.com/v1/templates/${templateName}/email`
        }

        const signedRequest = Signer.sign(request, access_info, service_info);
        return axios({...signedRequest});
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: 'GET_TEMPLATE',
          template: response.data
        });
      });
  }
}


export function getEndpoint(endpointId) {
  return function(dispatch) {

    const appId = '2ca307ced63e440bbd5e7b56651ccaac';

    return getPinpointClient()
      .then(pinpoint => {
        return pinpoint.getEndpoint({
          ApplicationId: appId,
          EndpointId: endpointId
        }).promise()
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: 'GET_ENDPOINT',
          endpoint: response.EndpointResponse
        });
      })
      .catch(() => {
        dispatch({
          type: 'GET_ENDPOINT',
          endpoint: {Id: '__notfound__'}
        });
      })
  };
}

// return Auth.currentCredentials()
//   .then((creds) => {
//
//     const access_info = {
//       secret_key: creds.secretAccessKey,
//       access_key: creds.accessKeyId,
//       session_token: creds.sessionToken,
//     };
//
//     const service_info = {
//         region: region,
//         service: 'mobiletargeting',
//     };
//
//
//     const request = {
//       method: 'GET',
//       url: `https://pinpoint.${region}.amazonaws.com/v1/apps/${appId}/endpoints/${endpointId}`
//     }
//
//     const signedRequest = Signer.sign(request, access_info, service_info);
//     console.log(signedRequest);
//     return axios({...signedRequest});
//   })
//   .then((response) => {
//     console.log(response.data);
//
//     dispatch({
//       type: 'GET_ENDPOINT',
//       endpoint: response.data
//     });
//   });
