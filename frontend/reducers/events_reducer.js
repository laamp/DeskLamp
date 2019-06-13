import {
  RECEIVE_SCHEDULE,
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT,
  DELETED_EVENT
} from "../actions/schedule_actions";

const eventsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SCHEDULE:
      return Object.assign(
        {}, oldState, {
          schedules: {
            [action.schedule.id]: action.schedule
          }
        }
      );
    case RECEIVE_ALL_EVENTS:
      return Object.assign(
        {}, oldState,
        { events: action.events }
      );
    case RECEIVE_EVENT:
      return Object.assign(
        {}, oldState, {
          events: {
            [action.event.id]: action.event
          }
        }
      );
    case DELETED_EVENT:
      let newState = Object.assign(oldState);
      delete newState.events[action.eventId];
      return newState;
    default:
      return oldState;
  }
};

export default eventsReducer;
