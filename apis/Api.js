import axios from 'axios';

const baseURL = 'http://localhost:3000/'
// axios.defaults.headers.common['Token'] = 'PlivoTestAsim' 
const config = {
    headers: { Token: 'PlivoTestAsim'},
  };


export const getContacts = (params) => {
    return new Promise((resolve, reject) => {
        axios.post(baseURL+'getContacts',params,config).then(response => {
            resolve(response.data)
        }).catch(error=>{
            reject(error);
        })
    });
}


export const updateContact = (params) => {
    return new Promise((resolve, reject) => {
        axios.put(baseURL+'update',params,config).then(response => {
            resolve(response.data)
        }).catch(error=>{
            reject(error);
        })
    });
}


export const deleteContact = (id) => {
    return new Promise((resolve, reject) => {
        axios.delete(baseURL+'delete/'+id,config).then(response => {
            resolve(response.data)
        }).catch(error=>{
            reject(error);
        })
    });
}

export const addContact = (params) => {
    return new Promise((resolve, reject) => {
        axios.post(baseURL+'save',params,config).then(response => {
            resolve(response.data)
        }).catch(error=>{
            reject(error);
        })
    });
}
