import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AnimatePresence, motion } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, borderTopRightRadius: "70%", width: 0 }}
        animate={{
          opacity: 1,
          borderTopRightRadius: "0%",

          width: "100%",
        }}
        transition={{ ease: [0.4, 0, 0.2, 1], duration: 1.5 }}
        style={{ overflowX: "hidden" }}
      >
        <App />
      </motion.div>
    </AnimatePresence>
  </React.StrictMode>
);
