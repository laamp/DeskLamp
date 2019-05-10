export const getHubs = orgId => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/hubs',
      data: { orgId }
    })
  );
};
