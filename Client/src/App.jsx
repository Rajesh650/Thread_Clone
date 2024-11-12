import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./component/Header";
import Home from "./pages/Protected/Home";
import Search from "./pages/Protected/Search";
import Error from "./pages/Error";
import ProtectedLayout from "./pages/Protected/ProtectedLayout";
import ProfileLayout from "./pages/Protected/profile/ProfileLayout";
import Threads from "./pages/Protected/profile/Threads";
import Repost from "./pages/Protected/profile/Repost";
import Replies from "./pages/Protected/profile/Replies";

const App = () => {
  return (
    <Box minHeight="100vh">
      <BrowserRouter>
        <Routes>
          {/* Protected routes */}
          <Route exact path="/" element={<ProtectedLayout />}>
            <Route exact index element={<Home />} /> {/* Home route */}
            <Route exact path="post/:id" element={<h1>single post</h1>} />
            <Route exact path="search" element={<Search />} />
            {/* Profile layout with nested routes */}
            <Route exact path="profile" element={<ProfileLayout />}>
              <Route exact path="threads/:id" element={<Threads />} />
              <Route exact path="replies/:id" element={<Replies />} />
              <Route exact path="repost/:id" element={<Repost />} />
            </Route>
          </Route>

          {/* Catch-all route for undefined paths */}
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
