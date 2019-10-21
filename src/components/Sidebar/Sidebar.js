import React from 'react';
import {bool} from 'prop-types';
import { StyledSidebar} from './Sidebar.styled';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Sidebar = ({open,...props}) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledSidebar open={open} aria-hidden={!isHidden} {...props}>
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true">&#x1f4cc;</span>Map
          </a>
          <Link to="/login" tabIndex={tabIndex}><span aria-hidden="true">Login</span></Link>
          <Link to="/register" tabIndex={tabIndex}><span aria-hidden="true">Register</span></Link>
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true">&#x1f4b0;</span>Pricing
          </a>
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true">&#x260E;</span>Contact
          </a>
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true">&#x2699;</span>Setting
          </a>
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true">&#x1f6c8;</span>About us
          </a>
        </StyledSidebar>
    )
}

Sidebar.propTypes = {
    open:bool.isRequired,
}

export default Sidebar;
