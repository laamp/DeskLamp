export const fetchSchedule = id => {
  return (
    $.ajax({
      method: "GET",
      url: `api/schedules/${id}`
    })
  );
};
window.fetchSchedule = fetchSchedule;
export const fetchAllEvents = scheduleId => {
  return (
    $.ajax({
      method: "GET",
      url: `api/schedules/${scheduleId}/events`
    })
  );
};
window.fetchAllEvents = fetchAllEvents;
export const fetchEvent = (scheduleId, id) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/schedules/${scheduleId}/events/${id}`
    })
  );
};
window.fetchEvent = fetchEvent;
export const createEvent = (scheduleId, event) => {
  return (
    $.ajax({
      method: "POST",
      url: `api/schedules/${scheduleId}/events`,
      data: { event }
    })
  );
};

export const updateEvent = (scheduleId, id, event) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `api/schedules/${scheduleId}/events/${id}`,
      data: { event }
    })
  );
};

export const deleteEvent = (scheduleId, id) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `api/schedules/${scheduleId}/events/${id}`
    })
  );
};
