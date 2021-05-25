import axios from '../../config/axios';

export function getAccount(){
    return axios
    .get(`/account`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw error;
    });
}