import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/nav/Navbar";
import UserPosts from "./Pages/UserPosts/UserPosts";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userPosts/:id" element={<UserPosts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
