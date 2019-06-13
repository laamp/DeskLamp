import * as APIUtil from "../util/schedule_api_util";

export const RECEIVE_SCHEDULE = "RECEIVE_SCHEDULE";
export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const DELETED_EVENT = "DELETED_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";

const receiveSchedule = schedule => ({
  type: RECEIVE_SCHEDULE,
  schedule: schedule
});

const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events: events
});

const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event: event
});

const deletedEvent = () => ({
  type: DELETED_EVENT
});

const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors: errors
});

export const fetchSchedule = id => dispatch => (
  APIUtil.fetchSchedule(id)
    .then(schedule => dispatch(receiveSchedule(schedule)))
    .fail(err => dispatch(receiveEventErrors(err)))
);

export const fetchAllEvents = scheduleId => dispatch => (
  APIUtil.fetchAllEvents(scheduleId)
    .then(events => dispatch(receiveAllEvents(events)))
    .fail(err => dispatch(receiveEventErrors(err)))
);

export const fetchEvent = (scheduleId, id) => dispatch => (
  APIUtil.fetchEvent(scheduleId, id)
    .then(event => dispatch(receiveEvent(event)))
    .fail(err => dispatch(receiveEventErrors(err)))
);

export const createEvent = (scheduleId, event) => dispatch => (
  APIUtil.createEvent(scheduleId, event)
    .then(event => dispatch(receiveEvent(event)))
    .fail(err => dispatch(receiveEventErrors(err)))
);

export const updateEvent = (scheduleId, id, event) => dispatch => (
  APIUtil.updateEvent(scheduleId, id, event)
    .then(event => dispatch(receiveEvent(event)))
    .fail(err => dispatch(receiveEventErrors(err)))
);

export const deleteEvent = (scheduleId, id) => dispatch => (
  APIUtil.deleteEvent(scheduleId, id)
    .then(() => dispatch(deletedEvent()))
    .fail(err => dispatch(receiveEventErrors(err)))
);
