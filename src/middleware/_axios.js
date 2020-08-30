import Axios from 'axios';

export const callGetMethod = (endpoint, header) => {
  const headers = header || process.env.HEADERS;
  return Axios.get(`${endpoint}/`, { headers })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('erro no callGetMethod', error);
      return error.response;
    });
};

export const callPostMethod = (endpoint, body, header) => {
  const headers = header || process.env.HEADERS;
  return Axios.post(`${endpoint}/`, body, { headers })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('erro no callPostMethod', error);
      return error.response;
    });
};

export const callDeleteMethod = (endpoint, body, header) => {
  const headers = header || process.env.HEADERS;
  return Axios.delete(`${endpoint}`, {
    data: body,
    headers: headers,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('erro no callDeleteMethod', error);
      return error.response;
    });
};

export const callPatchMethod = (endpoint, body, header) => {
  const headers = header || process.env.HEADERS;
  return Axios.patch(`${endpoint}/`, body, { headers })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('erro no callPatchMethod', error);
      return error.response;
    });
};
