import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

class Calendar extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    var request = new Request(
      "https://node-event-service-dylanl.nn.r.appspot.com/events"
    );

    fetch(request, { mode: "cors" })
      .then((response) => response.json())
      .then((jsonEvents) => {
        // jsonData is parsed json object received from url
        const events = jsonEvents;
        this.setState({ events });
        console.log(jsonEvents);
      })
      .catch((error) => {
        // handle your errors here
        console.error(error);
      });
  }

  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={this.state.events}
      />
    );
  }
}

export default Calendar;
