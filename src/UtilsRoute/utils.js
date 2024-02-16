const APP_PATH = "https://memorial-api.onrender.com/";

export const getNotes = (route) => {
  return fetch(APP_PATH + route)
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
};

export const getNotesAsync = async (route) => {
  try {
    const response = await fetch(APP_PATH + route);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
};

export const addNoteAsync = async (route, elemBody) => {
  console.log(elemBody);

  try {
    const response = await fetch(APP_PATH + route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(elemBody),
    });

    window.location.href = "https://memorial-soldier.netlify.app/";
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
// export default getNotes;
