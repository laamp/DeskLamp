export const fetchOrganizations = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/organizations'
    })
  );
};

export const fetchOrganization = id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/organizations/${id}`
    })
  );
};

export const createOrganization = organization => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/organizations',
      data: { organization }
    })
  );
};
