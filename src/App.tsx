import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ContactUs from "./Page/ContactUs";
import "antd/dist/antd.css";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState<any>(false);
  console.log("hello");

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/contact" component={ContactUs} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
