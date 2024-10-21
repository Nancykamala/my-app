import React from "react";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <a href="/">Go Back to Home</a>
    </div>
  );
}

export default NotFound;
