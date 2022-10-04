import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";



import Home from "./Pages/Home";
import UserPosts from "./Pages/UserPosts";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userPosts/:id" element={<UserPosts />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
