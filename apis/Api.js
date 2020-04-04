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

// export default getContacts;