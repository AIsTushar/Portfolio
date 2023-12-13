import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      ref={ref}
      // animate={isInView && "animate"}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>
            <a href="https://github.com/AIsTushar?tab=repositories">
              WHAT WE DO?
            </a>
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {/* box 1 */}
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front-End Development</h2>
          <p>
            Front-End Development involves creating the user interface and
            interactivity of a website or web application. It focuses on the
            visual aspects that users interact with, ensuring a seamless and
            engaging experience.
          </p>
          <button>Go</button>
        </motion.div>

        {/* box  2*/}
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>API Development</h2>
          <p>
            API Development revolves around building Application Programming
            Interfaces that enable communication between different software
            systems. It plays a crucial role in ensuring data exchange and
            functionality integration.
          </p>
          <button>Go</button>
        </motion.div>
        {/* box 3*/}
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI/UX Design</h2>
          <p>
            UI/UX Design focuses on creating a visually appealing and
            user-friendly interface. User Interface (UI) design deals with the
            look and feel, while User Experience (UX) design enhances overall
            user satisfaction by improving usability and accessibility.
          </p>
          <button>Go</button>
        </motion.div>
        {/* box 4*/}
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full-Stack Development</h2>
          <p>
            Full-Stack Development involves working on both the front-end and
            back-end of a web application. Full-stack developers have expertise
            in various technologies, allowing them to handle the entire
            development process and build end-to-end solutions.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
