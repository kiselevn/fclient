export const GET_CLIENTS = 'GET_CLIENTS';

export const getClients = (value) => {
  return {
    type: GET_CLIENTS,
    payload: value,
  };
};
