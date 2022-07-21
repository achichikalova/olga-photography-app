import React, { useEffect, useRef, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import Family from "../assets/images/family.jpg";
import ImageGallery from "react-image-gallery";
import { storage } from "../firebase/config";
import { motion } from "framer-motion";
import "./Home.scss";

const Home = () => {
  const [images, setImages] = useState([]);

  const imagesRef = ref(storage, `/random`);
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      listAll(imagesRef).then((res) => {
        res.items
          .forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImages((prev) => [...prev, { original: url, thumbnail: url }]);
            });
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
  }, [imagesRef]);

  return (
    <section className="home">
      <motion.div
        className="carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ImageGallery
          autoPlay={true}
          showIndex={true}
          showThumbnails={false}
          slideDuration={800}
          slideInterval={5000}
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </motion.div>
      <div className="info">
        <motion.div
          className="quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: false }}
        >
          <p>
            "Each of you is <em>unique</em> —
            <br />
            this is what I want to show
            <br />
            through my pictures."
          </p>
        </motion.div>
        <img src={Family} alt="" />
      </div>
    </section>
  );
};

export default Home;
