import React from 'react';

class EventPlace extends React.Component {
  render() {
    return (
      <h2> {this.props.place} {this.props.time} </h2> 
    )
  }
}

export default EventPlace;


