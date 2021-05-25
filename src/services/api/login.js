import axios from '../../config/axios';

export const getAllAccount = () =>
{
    return axios
    .get(`/account`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw error;
    });
}

export const authenticate = data =>
{
    return axios
    .post(`/account/login`, data)
    .then(response => {
        return response.data;
    })
    .catch(error => {
       console.log(error.response.data);
       throw error;
    });
}

export const getAccountById = id =>
{
    return axios
    .get(`/account/${id}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw error;
    });
}

export const createUser = user =>
{
    return axios
    .post(`/account/`, user)  
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log('Ops ! Ocorreu um erro' + error);
        throw error;
    });
}

export const putUser = user =>
{
    return axios
    .put(`/account/`, user)  
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log('Ops ! Ocorreu um erro' + error);
        throw error;
    });
}

export const deleteById = id =>
{
    return axios
    .delete(`/account/${id}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw error;
    });
}
