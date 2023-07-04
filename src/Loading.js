import React from "react";

export default function Loading() {
  return (
    <div className="text-center">
      <div
        className="spinner-border"
        role="status"
        style={{ height: "60px", width: "60px", marginTop: "80px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}