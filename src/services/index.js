import axios from 'axios';

const ENDPOINT = import.meta.env.VITE_ENDPOINT_URL;

const getTokens = () => {
  const url = `${ENDPOINT}/tokens`;
  return axios.get(url)
    .then(res => {
      return res.data
    }).catch((err) => {
      console.log(err);
      return err
    })
};


const purchaseToken = (data) => {
  return axios.post(`${ENDPOINT}/tokens/purchase`, data)
    .then(res => {  
      return res.data;
    }).catch((err) => {
      return err.response.data
    })
}

const checkToken = (token) => {
  return axios.get(`${ENDPOINT}/tokens/by-token/${token}`)
    .then(res => {  
      return res.data;
    }).catch((err) => {
      return err.response.data
    })
}


export {
  getTokens,
  purchaseToken,
  checkToken
};