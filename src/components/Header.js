// import react from react

import React from "react";

// creates Header component to export, takes in any existing props


//Header component with props passed
const Header = (props) => {
  return (
    
    // an html div element
    <div>
    //props.title  is the props for the title and the headerStyle is an object that has properties used 
    //to style the header
    // an h1 element with styles from headerStyle object properties. Contains the title prop passed in
    
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
// -- Note: headerStyle uses camelCase because of JSX -- 
// create headerStyle object to be used on the h1
//property Names are written in camelCase as it is a JSX format
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};
// exports header component
export default Header;
