import Axios from 'axios';

const baseUrl = 'https://shark-attack-60f42.firebaseio.com/students.json';

const getStudents = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});

export default getStudents;
