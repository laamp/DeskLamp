export const signUp = user => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: { user }
    })
  );
};

export const getUser = id => {
  return (
    $.ajax({
      method: "GET",
      url: `api/users/${id}`
    })
  );
};

export const updateUser = (id, user) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `api/users/${id}`,
      data: { user }
    })
  )
}
