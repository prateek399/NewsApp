import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/business"
              element={<News key="business" country="in" catagory="business" />}
            />
            <Route
              path="/sports"
              element={<News key="sports" country="in" catagory="sports" />}
            />

            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  country="in"
                  catagory="entertainment"
                />
              }
            />
            <Route
              path="/science"
              element={<News key="science" country="in" catagory="science" />}
            />

            <Route
              path="/health"
              element={<News key="health" country="in" catagory="health" />}
            />

            <Route
              path="/technology"
              element={
                <News key="technology" country="in" catagory="technology" />
              }
            />

            <Route
              path="/"
              element={<News key="default" country="in" catagory="general" />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
