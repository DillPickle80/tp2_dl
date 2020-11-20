import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

class Calendar extends Component {
  state = {
    events: [],
  };

  // async getEventsFromApi() {
  //   try {
  //     let response = await fetch(
  //       "https://node-event-service-dylanl.nn.r.appspot.com/events"
  //     );
  //     let responseJson = await response.json();
  //     console.log(responseJson);
  //     return responseJson;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  componentDidMount() {
    var request = new Request(
      "https://node-event-service-dylanl.nn.r.appspot.com/events"
    );
    // request.headers

    fetch(request, { mode: "cors" })
      // fetch("https://node-event-service-dylanl.nn.r.appspot.com/events", {
      //   mode: "cors",
      // })
      .then((response) => response.json())
      .then((jsonEvents) => {
        // jsonData is parsed json object received from url
        const events = jsonEvents;
        // events = jsonEvents;
        this.setState({ events });
        console.log(jsonEvents);
      })
      .catch((error) => {
        // handle your errors here
        console.error(error);
      });
    // const events = this.getEventsFromApi();
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
