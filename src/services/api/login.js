import axios from '../../config/axios';
import swal from 'sweetalert';

export const getAllAccount = () =>
{
    return axios
    .get(`/account`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        swal("Ocorreu um erro", `${error.response.data}\n`, "error");
    });
}

export const authenticate = data =>
{
    return axios
    .post(`/account/login`, data)
    .then(response => {
        swal("Seja-bem vindo !");
        console.log("sdsafa");
        return response.data;
    })
    .catch(error => {
        console.log("oooo");
       swal("Ocorreu um erro", `${error.response.data}\n`, "error");
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
        swal("Ocorreu um erro", `${error.response.data}\n`, "error");
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
        swal("Ocorreu um erro", `${error.response.data}\n`, "error");
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
        swal("Ocorreu um erro", `${error.response.data}\n`, "error");
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
        swal("Ocorreu um erro", `${error.response.data}\n`, "error");
    });
}
