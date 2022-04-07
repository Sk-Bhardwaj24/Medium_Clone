import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay } from "../../Redux/Theme/action.js";

let Nav = styled.div`
  display: ${(props) => (props.vis === true ? "flex" : "none")};
  height: 80px;
  position: sticky;
  top: 0px;
  z-index: 100;

  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-left: 100px;
  padding-right: 100px;
  /* border-bottom:1px solid black ; */
  border-bottom: ${(props) =>
    props.color === "rgb(68, 121, 255)"
      ? "1px solid white"
      : "1px solid black"};

  background: ${(props) => (props.color ? props.color : "white")};
  transition: background-color 300ms linear;
  .fDiv {
    padding-left: 60px;
    padding-right: 60px;
  }

  .sDiv {
    display: flex;
    margin-left: auto;
  }
  .childDiv {
    margin: 0vw 1.5vw 0vw 1.5vw;
  }
  .childLast {
    width: 120px;
    background-color: black;
    padding: 5px;
    /* padding-left:34px ; */
    align-items: center;
    text-align: center;
    border-radius: 30px;
    box-sizing: border-box;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: "Soehne web buch", sans-serif;
  /* color: rgb(0 0 0); */
  color: ${(props) =>
    props.color === "rgb(68, 121, 255)" ? "white" : "rgb(0 0 0)"};
  font-size: 15px;
  line-height: 100%;

  &:hover {
    text-decoration: underline;
  }
`;
const StyledLinklast = styled(Link)`
  text-decoration: none;
  font-family: "Soehne web buch", sans-serif;
  color: white;
  font-size: 15px;
  line-height: 100%;

  /* &:hover{
    text-decoration:underline ;
  } */
`;

export default function Navbar() {
  // ******************REDUX**********************
  const dispatch = useDispatch();

  const [color, setNavBg] = React.useState("white");
  const [newcolor, setNewcolor] = React.useState("white");

  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      // setColorchange(true);

      setNavBg("white");
      // Nav.setAttribute("tran");
    } else {
      setNavBg(newcolor);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const location = useLocation();
  // console.log(location)
  React.useEffect(() => {
    // console.log(window.location.pathname)
    if (window.location.pathname === "/") {
      setNavBg("#C4E2FF");
      setNewcolor("#C4E2FF");
      dispatch(setDisplay(true));
    } else if (location.pathname === "/memberShip") {
      setNavBg("rgb(68, 121, 255)");
      // console.log(vis);
      setNewcolor("rgb(68, 121, 255)");
      dispatch(setDisplay(true));
    } else if (location.pathname === "/write") {
      dispatch(setDisplay(true));

      setNavBg("rgb(242, 77, 46)");
      setNewcolor("rgb(242, 77, 46)");
    } else if (location.pathname === "/logIn") {
      dispatch(setDisplay(false));
    } else if (location.pathname === "/StartIn") {
      dispatch(setDisplay(false));
    } else if (location.pathname === "/register") {
      dispatch(setDisplay(false));
    } else if (location.pathname === "/AfterLogincomp") {
      dispatch(setDisplay(false));
    } else {
      setNavBg("white");
      dispatch(setDisplay(true));
      setNewcolor("white");
    }
  }, [location]);
  const { vis } = useSelector((state) => state.vis);

  return (
    <>
      <Nav color={color} vis={vis}>
        <div className="fDiv">
          <StyledLink to="/">
            <svg className="svgIcon-use" height="25" viewBox="0 0 3940 610">
              <path d="M594.79 308.2c0 163.76-131.85 296.52-294.5 296.52S5.8 472 5.8 308.2 137.65 11.69 300.29 11.69s294.5 132.75 294.5 296.51"></path>
              <path d="M917.86 308.2c0 154.16-65.93 279.12-147.25 279.12s-147.25-125-147.25-279.12S689.29 29.08 770.61 29.08s147.25 125 147.25 279.12"></path>
              <path d="M1050 308.2c0 138.12-23.19 250.08-51.79 250.08s-51.79-112-51.79-250.08 23.19-250.08 51.8-250.08S1050 170.09 1050 308.2"></path>
              <path d="M1862.77 37.4l.82-.18v-6.35h-167.48l-155.51 365.5-155.51-365.5h-180.48v6.35l.81.18c30.57 6.9 46.09 17.19 46.09 54.3v434.45c0 37.11-15.58 47.4-46.15 54.3l-.81.18V587H1327v-6.35l-.81-.18c-30.57-6.9-46.09-17.19-46.09-54.3V116.9L1479.87 587h11.33l205.59-483.21V536.9c-2.62 29.31-18 38.36-45.68 44.61l-.82.19v6.3h213.3v-6.3l-.82-.19c-27.71-6.25-43.46-15.3-46.08-44.61l-.14-445.2h.14c0-37.11 15.52-47.4 46.08-54.3m97.43 287.8c3.49-78.06 31.52-134.4 78.56-135.37 14.51.24 26.68 5 36.14 14.16 20.1 19.51 29.55 60.28 28.09 121.21zm-2.11 22h250v-1.05c-.71-59.69-18-106.12-51.34-138-28.82-27.55-71.49-42.71-116.31-42.71h-1c-23.26 0-51.79 5.64-72.09 15.86-23.11 10.7-43.49 26.7-60.45 47.7-27.3 33.83-43.84 79.55-47.86 130.93-.13 1.54-.24 3.08-.35 4.62s-.18 2.92-.25 4.39c-.14 2.75-.25 5.51-.31 8.28-.1 4.44-.13 8.91-.05 13.41C1860.79 507 1923.65 600 2035.3 600c98 0 155.07-71.64 169.3-167.8l-7.19-2.53c-25 51.68-69.9 83-121 79.18-69.76-5.22-123.2-75.95-118.35-161.63m532.69 157.68c-8.2 19.45-25.31 30.15-48.24 30.15s-43.89-15.74-58.78-44.34c-16-30.7-24.42-74.1-24.42-125.51 0-107 33.28-176.21 84.79-176.21 21.57 0 38.55 10.7 46.65 29.37zm165.84 76.28c-30.57-7.23-46.09-18-46.09-57V5.28L2424.77 60v6.7l1.14-.09c25.62-2.07 43 1.47 53.09 10.79 7.9 7.3 11.75 18.5 11.75 34.26v71.14c-18.31-11.69-40.09-17.38-66.52-17.38-53.6 0-102.59 22.57-137.92 63.56-36.83 42.72-56.3 101.1-56.3 168.81C2230 518.72 2289.53 600 2378.13 600c51.83 0 93.53-28.4 112.62-76.3V588h166.65v-6.66zm159.29-505.33c0-37.76-28.47-66.24-66.24-66.24-37.59 0-67 29.1-67 66.24s29.44 66.24 67 66.24c37.77 0 66.24-28.48 66.24-66.24m43.84 505.33c-30.57-7.23-46.09-18-46.09-57h-.13V166.65l-166.66 47.85v6.5l1 .09c36.06 3.21 45.93 15.63 45.93 57.77V588h166.8v-6.66zm427.05 0c-30.57-7.23-46.09-18-46.09-57V166.65L3082 212.92v6.52l.94.1c29.48 3.1 38 16.23 38 58.56v226c-9.83 19.45-28.27 31-50.61 31.78-36.23 0-56.18-24.47-56.18-68.9V166.66l-166.66 47.85V221l1 .09c36.06 3.2 45.94 15.62 45.94 57.77v191.27a214.48 214.48 0 003.47 39.82l3 13.05c14.11 50.56 51.08 77 109 77 49.06 0 92.06-30.37 111-77.89v66h166.66v-6.66zM3934.2 588v-6.67l-.81-.19c-33.17-7.65-46.09-22.07-46.09-51.43v-243.2c0-75.83-42.59-121.09-113.93-121.09-52 0-95.85 30.05-112.73 76.86-13.41-49.6-52-76.86-109.06-76.86-50.12 0-89.4 26.45-106.25 71.13v-69.87l-166.66 45.89v6.54l1 .09c35.63 3.16 45.93 15.94 45.93 57V588h155.5v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66V255.72c7-16.35 21.11-35.72 49-35.72 34.64 0 52.2 24 52.2 71.28V588h155.54v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66v-248a160.45 160.45 0 00-2.2-27.68c7.42-17.77 22.34-38.8 51.37-38.8 35.13 0 52.2 23.31 52.2 71.28V588z"></path>
            </svg>{" "}
          </StyledLink>
        </div>

        <div className="sDiv">
          <div className="childDiv">
            <StyledLink to="/ourStory" color={color}>
              Our Story
            </StyledLink>
          </div>
          <div className="childDiv">
            <StyledLink to="/memberShip" color={color}>
              Membership
            </StyledLink>
          </div>

          <div className="childDiv">
            <StyledLink to="/write" color={color}>
              Write
            </StyledLink>
          </div>
          <div className="childDiv">
            <StyledLink to="/logIn" color={color}>
              Sign In
            </StyledLink>
          </div>
          <div className="childLast">
            <StyledLinklast to="/StartIn" color={color}>
              Start Writing
            </StyledLinklast>
          </div>
        </div>
      </Nav>
    </>
  );
}
