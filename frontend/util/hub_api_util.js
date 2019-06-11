export const fetchHubs = orgId => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/hubs',
      data: { orgId }
    })
  );
};

export const createHub = hub => {
  return (
    $.ajax({
      method: "POST",
      url: "api/hubs",
      data: { hub }
    })
  );
};

export const fetchHub = id => {
  return (
    $.ajax({
      method: "GET",
      url: `api/hubs/${id}`
    })
  );
};

export const updateHub = (id, hub) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `api/hubs/${id}`,
      data: { hub }
    })
  );
};

export const destroyHub = id => {
  return (
    $.ajax({
      method: "DELETE",
      url: `api/hubs/${id}`
    })
  );
};
