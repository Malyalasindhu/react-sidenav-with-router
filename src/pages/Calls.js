import React from "react";
import Sidebar from "../Components/Sidebar";
import Box from "@mui/material/Box";

const Calls = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Calls Window</h1>
        </Box>
      </Box>
    </div>
  );
};
export default Calls;
