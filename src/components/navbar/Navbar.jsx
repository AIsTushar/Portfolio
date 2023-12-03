import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wraper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/azizul.tushar.589583/">
            <img src="/facebook.png" alt="Facebook Icon" />{" "}
          </a>
          <a href="https://instagram.com/azizuli.tushar">
            <img src="/instagram.png" alt="Instagram Icon" />{" "}
          </a>
          <a href="https://github.com/AIsTushar">
            <img src="/github.png" alt="Github Icon" />{" "}
          </a>
          <a href="https://x.com/tushar_azizul">
            <img src="/twitter.png" alt="Twitter Icon" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
