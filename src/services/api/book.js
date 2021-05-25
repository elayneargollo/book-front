import axios from '../../config/axios';

export const getBook = () =>
{
    return axios
    .get('/Book/v1')  
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log('Ops ! Ocorreu um erro' + error);
    });
}

export const getBookById = id =>
{
    return axios
    .get(`/Book/v1/${id}`)  
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log('Ops ! Ocorreu um erro' + error);
    });
}

export const deleteBookById = id =>
{
    return axios
    .delete(`/Book/v1/${id}`)  
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log('Ops ! Ocorreu um erro' + error);
    });
}