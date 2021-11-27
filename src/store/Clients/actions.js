export const GET_CLIENTS = 'GET_CLIENTS';
export const EDIT_CLIENT_STATUS = 'EDIT_CLIENT_STATUS';

export const getClients = (clientsList) => {
  return {
    type: GET_CLIENTS,
    payload: clientsList,
  };
};

export const editClientStatus = (clientKey, statusCode) => {
  return {
    type: EDIT_CLIENT_STATUS,
    payload: { key: clientKey, code: statusCode },
  };
};
