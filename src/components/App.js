import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./Login";
import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Post from "./Post";
import Join from "./Join";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/post/:id" component={Post} />
      <Route path="/join" component={Join} />
      <Footer />
    </BrowserRouter>
  );
}
