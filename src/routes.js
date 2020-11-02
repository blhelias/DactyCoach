/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Home from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
// core components/views for DactyCoach layout
import HomePage from "views/Home/Home.js"
import DactyCoachPage from "views/DactyCoach/DactyCoach.js";
import UserProfile from "views/UserProfile/UserProfile.js";

const dactyCoachRoutes = [
  {
    path: "home",
    name: "Home",
    icon: Home,
    component: HomePage,
    layout: "/"
  },
  {
    path: "training-session",
    name: "Training",
    icon: Dashboard,
    component: DactyCoachPage,
    layout: "/"
  },
  {
    path: "profile",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/"
  }
];

export default dactyCoachRoutes;
