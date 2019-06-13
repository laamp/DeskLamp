export const fetchOrganizations = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/organizations'
    })
  );
};
window.fetchOrganizations = fetchOrganizations;
export const fetchOrganization = id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/organizations/${id}`
    })
  );
};
window.fetchOrganization = fetchOrganization;
export const createOrganization = organization => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/organizations',
      data: { organization }
    })
  );
};
