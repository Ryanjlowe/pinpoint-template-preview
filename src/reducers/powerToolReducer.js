
const initialState = {
  endpoint: {},
  endpointId: '',
  templates: [],
  templateName: '',
  template: {
    TemplateName: ''
  }
}

export default (state = initialState, action = {}) => {

  console.log(action);
  const newState = state;

  switch (action.type) {
    case 'SELECTED_ENDPOINT':
      return {...newState, endpointId: action.endpointId, endpoint: {}};

    case 'GET_ENDPOINT':
      return {...newState, endpoint: action.endpoint };

    case 'LIST_TEMPLATES':
      return {...newState, templates: action.templates};

    case 'SELECTED_TEMPLATE':
      return {...newState, templateName: action.templateName, template: {}};

    case 'GET_TEMPLATE': {
      const test = Object.assign({}, state, {template: action.template});
      console.log(test);
      return test;
    }

    default:
      return state
  }
}
