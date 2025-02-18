import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { changeTabActive } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ activeTab }) => {
  const dispatch = useDispatch();

  const [statusNav, changeStatusNav] = useState(null);

  const toggleNav = () => {
    // Debugging log to see the toggle action
    console.log("Current Nav Status:", statusNav);
    changeStatusNav(statusNav === null ? "active" : null);
  };

  const changeTab = (value) => {
    dispatch(changeTabActive(value));
    toggleNav(); // Hide the nav when a tab is clicked
  };

  return (
    <header>
      <div className="logo">
        <img src="/logo2.png" alt="" /> Portfolio
      </div>

      <div className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
