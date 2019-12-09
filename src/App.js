import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrimarySearchAppBar from "./Components/TopNav";
import HomePage from "./Components/HomePage";
import SignOutPage from "./Components/SignOutPage";
import ProfilePage from "./Components/ProfilePage";
import SupportPage from "./Components/SupportPage";
import AddSupport from "./Components/AddNewSupport";
import YourSupportPages from "./Components/YourSupportPages";
import EditSupport from "./Components/EditSupport";

function Index() {
  return <HomePage></HomePage>;
}

function Profile() {
  return <ProfilePage></ProfilePage>;
}

function Support(props) {
  return <SupportPage id={props.match.params.id}></SupportPage>;
}

function SignOut() {
  return <SignOutPage></SignOutPage>;
}

function AddNewAction() {
  return <AddSupport></AddSupport>;
}

function YourPages(props) {
  return <YourSupportPages id={props.match.params.id}></YourSupportPages>;
}

function EditPage(props) {
  return <EditSupport id={props.match.params.id}></EditSupport>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <PrimarySearchAppBar></PrimarySearchAppBar>
        </nav>
        <Route exact path="/" component={Index} />
        <Route path="/home/" component={Index} />
        <Route path="/profile/" component={Profile} />
        <Route path="/support/" component={Support} />
        <Route path="/singout/" component={SignOut} />
        <Route path="/addNewAction/" component={AddNewAction} />
        <Route path="/supportpage/:id" component={Support} />
        <Route path="/yourpages/:id" component={YourPages} />
        <Route path="/editpage/:id" component={EditPage} />
      </div>
    </Router>
  );
}

export default AppRouter;
