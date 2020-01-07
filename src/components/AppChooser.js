import React from 'react';
import {connect} from 'react-redux';
import {getApps, selectApp} from '../actions/index';

class AppChooser extends React.Component {

  componentDidMount() {
    this.props.getApps();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.region !== this.props.region) {
      this.props.getApps();
    }
  }

  onChange(event) {
    this.props.selectApp(event.target.value);
  }

  render() {
    // console.log(this);
    return (
      <div className="app-chooser">
        <h3>Pick a Pinpoint App</h3>
        <select onChange={this.onChange.bind(this)} value={this.props.appId}>
          {this.props.apps.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map((app, idx) => (
            <option key={idx} value={app.Id}>{app.Name}</option>
          ))}
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    apps: state.powerTools.apps,
    appId: state.powerTools.appId,
    region: state.powerTools.region
  };
}


export default connect(mapStateToProps, {getApps, selectApp})(AppChooser);
