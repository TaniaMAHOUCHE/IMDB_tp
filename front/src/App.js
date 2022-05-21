import React, { useState } from 'react'
import SearchMovie from './components/SearchMovie'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Signup from "./Pages/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/Page1" component={Page1}></Route>
          <Route path="/Page2" component={Page2}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
      </BrowserRouter>
      <SearchMovie/>
    </>
  );

}

export default App
