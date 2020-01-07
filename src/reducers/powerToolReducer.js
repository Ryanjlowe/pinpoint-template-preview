
const initialState = {
  region: 'us-east-1',
  apps: [],
  appId: null,
  endpoint: {},
  endpointId: '',
  templates: [],
  templateName: '',
  template: {
    TemplateName: ''
  }
}

export default (state = initialState, action = {}) => {

  //console.log(action);
  const newState = state;

  switch (action.type) {

    case 'SELECTED_REGION':
      return {...initialState, region: action.region};

    case 'GET_APPS':
      return {...newState, apps: action.apps, appId: state.appId ?? (action.apps.length > 0 ? action.apps[0].Id : null)};

    case 'SELECTED_APP':
      return {...newState, appId: action.appId};

    case 'SELECTED_ENDPOINT':
      return {...newState, endpointId: action.endpointId, endpoint: {}};

    case 'GET_ENDPOINT':
      return {...newState, endpoint: action.endpoint };

    case 'LIST_TEMPLATES':
      return {...newState, templates: action.templates};

    case 'SELECTED_TEMPLATE':
      return {...newState, templateName: action.templateName, template: {}};

    case 'GET_TEMPLATE':
      return {...newState, template: action.template};

    default:
      return state
  }
}
