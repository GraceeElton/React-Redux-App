import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTitle } from "../Store/Actions";
import Loader from "react-loader-spinner";

const GoTTitle = (props) => {
  useEffect(() => {
    props.getTitle();
  }, []);
  console.log(props);
  return (
    <div className="holder">
      <header className="Title">
        <h1>Game of Thones Quotes! </h1>
        <hr></hr>
        {props.available && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
      </header>
      <div className="card">
        {props.quotes && <h3>"{props.quotes}"</h3>}
        {props.character && <h3>"{props.character}"</h3>}
        {props.error && <p className="error">{props.error}</p>}
        <button className="GetNew" onClick={props.getTitle}>
          Get A NEW QUOTE!
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  return {
    character: state.character,
    quotes: state.quotes,
    available: state.available,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getTitle })(GoTTitle);
