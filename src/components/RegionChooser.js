import React from 'react';
import {connect} from 'react-redux';
import {selectRegion} from '../actions/index';

const regions = ['us-east-1', 'us-west-2', 'ap-south-1', 'ap-southeast-2', 'eu-central-1', 'eu-west-1'];

class RegionChooser extends React.Component {


  onChange(event) {
    this.props.selectRegion(event.target.value);
  }

  render() {
    console.log(this);
    return (
      <div className="region-chooser">
        <select onChange={this.onChange.bind(this)} value={this.props.region}>
          {regions.map((region, idx) => (
            <option key={idx} value={region}>{region}</option>
          ))}
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    region: state.powerTools.region
  };
}


export default connect(mapStateToProps, {selectRegion})(RegionChooser);
