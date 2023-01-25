import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './Nav'
import Home from './Home'
import Header from './Header'
import Contact from './Contact'
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SearchOrgs" element={<SearchOrgs />} />
            <Route path="/SavedOrgs" element={<SavedOrgs />} />
            <Route path="/Story" element={<Story />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            {/* <Route 
                path="/"  <<< put path here for new route 
                element={<element/>} <<< put element here for new route 
                /> */}
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;