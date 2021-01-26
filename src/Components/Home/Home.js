import React from "react";
import { connect } from "react-redux";

const Home = () => {
  return <div>home</div>;
};

const mapStateToProps = (state) => {
  return {
    movies: state,
  };
};

export default connect(mapStateToProps)(Home);
