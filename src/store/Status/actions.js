export const GET_STATUS = 'GET_STATUS';

export const getStatus = (value) => {
  return {
    type: GET_STATUS,
    payload: value,
  };
};
