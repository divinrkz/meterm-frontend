import axios from 'axios';

const ENDPOINT = import.meta.env.VITE_ENDPOINT_URL;

const getTokens = () => {
  const url = `${ENDPOINT}/tokens`;
  return axios.get(url)
    .then(res => {
        console.log(res);
      return res.data
    })
};


const purchaseToken = (data) => {
  return axios.post(`${ENDPOINT}/tokens/purchase`, data)
    .then(res => {  
        console.log(res);
      return res.data;
    })
}


export {
  getTokens,
  purchaseToken
};