import axios from '../../config/axios';
import swal from 'sweetalert';

const version = 'v1';

export const getBook = () =>
{
    return axios
    .get('/Book/v1')  
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return error;
    });
}

export const getBookById = id =>
{
    return axios
    .get(`/Book/${version}/${id}`)  
    .then(response => {
        return response.data;
    })
    .catch(error => {
        swal("Ocorreu um erro", "", "error");
    });
}

export const deleteBookById = id =>
{
    return axios
    .delete(`/Book/${version}/${id}`)  
    .then(response => {
        return response.data;
    })
    .catch(error => {
        swal("Ocorreu um erro", `${error.response.data}\n`, "error");
    });
}

export const postBook = book =>
{
    return axios
    .post(`/Book/${version}`, book)  
    .then(response => {
        return response.data;
    })
    .catch(error => {
        swal("Ocorreu um erro", `${error.response.data}\n`, "error");
    });
}

export const pustBook = book =>
{
    return axios
    .put(`/Book/${version}`, book)  
    .then(response => {
        return response.data;
    })
    .catch(error => {
        swal("Ocorreu um erro", `${error.response.data}\n`, "error");
    });
}