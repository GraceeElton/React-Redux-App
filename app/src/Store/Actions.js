import axios from "axios";

export const getTitle = () => {
  return (dispatch) => {
    dispatch({ type: "START" });
    axios
      .get("https://got-quotes.herokuapp.com/quotes")
      .then((res) => {
        console.log(res);
        // res.data.titles
        dispatch({ type: "SUCCESS", payload: res.data.quote });
        dispatch({ type: "NAME", payload: res.data.character });
      })
      .catch((err) => {
        console.log("THIS is the error", err.res);
        dispatch({ type: "ERROR", payload: err });
      });
  };
};
