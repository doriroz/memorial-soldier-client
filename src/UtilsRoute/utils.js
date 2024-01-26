const APP_PATH = "http://localhost:3000/api/";

const getNotes = (route) => {
  return fetch("http://localhost:3000/" + route)
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
};

export default getNotes;
