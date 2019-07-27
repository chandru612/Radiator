import React from 'react';
import axios from 'axios';
import EventTitle from './EventTitle';
import EventPlace from './EventPlace';
import EventAuthor from './EventAuthor';
import EventSession from './EventSession';

class RadiatorContentFrame extends React.Component {

  state = {
    event: {}
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get("http://www.mocky.io/v2/5d22c9af2e00004f00c3ebae")
      .then(response => {
        const event = response.data.event
        this.setState({ event });
      })
  };

  render() {
    const event = this.state.event;
    if (event == null) {
      return (
      <div>
        <EventSession sessionName="Loading.." />
      </div>
      )
    } else {
      return <div>
        <EventSession sessionName={event.session} />
        <EventTitle title={event.title} />
        <EventPlace place={event.place} time={event.time} />
        <EventAuthor authorName={event.author} />
      </div>
    }
  }
}

export default RadiatorContentFrame;


