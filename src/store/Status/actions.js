export const GET_STATUS = 'GET_STATUS';

export const getStatus = (statusList) => {
  return {
    type: GET_STATUS,
    payload: statusList,
  };
};
