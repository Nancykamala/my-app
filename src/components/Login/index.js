import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

function Login() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/search?name=${query}`);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a product"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Login;
