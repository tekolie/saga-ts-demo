import React from "react";

export const Loader:React.FC<{}> = () => (
  <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
