import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-success">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="lead text-muted mb-4">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="btn btn-success btn-lg shadow">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
