const APP_PATH = "http://localhost:3000/api/";

export const getNotes = (route) => {
  return fetch("http://localhost:3000/" + route)
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
};

export const getNotesAsync = async (route) => {
  try {
    const response = await fetch("http://localhost:3000/" + route);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
};

// export default getNotes;
