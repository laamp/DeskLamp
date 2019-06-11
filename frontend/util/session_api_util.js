// functions for ajax requests related to sessions
export const signIn = user => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: { user }
    })
  );
};

export const signOut = () => {
  return (
    $.ajax({
      method: 'DELETE',
      url: 'api/session'
    })
  );
};
