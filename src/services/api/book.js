import axios from '../../config/axios';

const version = 'v1';

export const getBook = () =>
{
    return axios
    .get(`/Book/${version}`)  
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
    .get(`/Book/${version}/${id}`)  
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
    .delete(`/Book/${version}/${id}`)  
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log('Ops ! Ocorreu um erro' + error);
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
        console.log('Ops ! Ocorreu um erro' + error);
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
        console.log('Ops ! Ocorreu um erro' + error);
    });
}