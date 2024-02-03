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

export const addNoteAsync = async (route, elemBody) => {
  console.log(elemBody);

  try {
    const response = await fetch("http://localhost:3000/notes/" + route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(elemBody),
    });

    window.location.href = "http://localhost:5173";
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
// export default getNotes;
