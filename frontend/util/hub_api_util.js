export const getHubs = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/hubs'
    })
  );
};

window.getHubs = getHubs;
