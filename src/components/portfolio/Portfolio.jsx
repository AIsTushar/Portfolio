import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Tour App",
    img: "/natours.png",
    desc: "Natours is a comprehensive Node.js application developed using Express, MongoDB, Mongoose, and various npm modules. This application serves as both a frontend and provides a robust API for managing a tour management company.",
    link: "https://github.com/AIsTushar/Natours",
  },
  {
    id: 2,
    title: "Hadith App",
    img: "/hadith.png",
    desc: "Sacred Sayings is a web application that provides a collection of Hadiths (sacred sayings) for users. Users can view, search, and interact with Hadiths on this platform. The full web application is in bangla language.",
    link: "https://github.com/AIsTushar/Sacred-Sayings-Hadith_In_Bengali",
  },
  {
    id: 3,
    title: "Cooking-Blog",
    img: "/cooking.jpeg",
    desc: "Cooking Blog is a web application where users can share and discover recipes. The website is responsive and features a search function for easy recipe navigation.",
    link: "https://github.com/AIsTushar/Cooking-Blog",
  },
  {
    id: 4,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "RentMatch is an Android application that allows users to post and view rental information with photos and locations using the Mapbox API. Users can sign up, log in, update their rental information, reset their passwords, and manage account details. The app is developed using Java and XML for layout, with a Firebase database for data storage. The development environment used is Android Studio.",
    link: "#",
  },
  {
    id: 5,
    title: "RentMatch App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "RentMatch is an Android application that allows users to post and view rental information with photos and locations using the Mapbox API. Users can sign up, log in, update their rental information, reset their passwords, and manage account details. The app is developed using Java and XML for layout, with a Firebase database for data storage. The development environment used is Android Studio.",
    link: "https://github.com/AIsTushar/RentMatch-RentalFinder-App",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href="{item.link}">See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
