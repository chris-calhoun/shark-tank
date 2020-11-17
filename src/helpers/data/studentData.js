import Axios from 'axios';

const baseUrl = 'https://shark-attack-60f42.firebaseio.com';

const livingStudents = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}/students.json?orderBy="isDead"&equalTo=false`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

const dearlyBeloved = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}/students.json?orderBy="isDead"&equalTo=true`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

const followTheLight = (studentId) => Axios.patch(`${baseUrl}/students/${studentId}.json`, { isDead: true });

export { livingStudents, dearlyBeloved, followTheLight };
