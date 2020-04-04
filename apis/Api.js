import axios from 'axios';

export const getContacts = (params) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/getContacts',params).then(response => {
            resolve(response.data)
        }).catch(error=>{
            reject(error);
        })
    });
}


export const updateContact = (params) => {
    return new Promise((resolve, reject) => {
        axios.put('http://localhost:3000/update',params).then(response => {
            resolve(response.data)
        }).catch(error=>{
            reject(error);
        })
    });
}

// export default getContacts;