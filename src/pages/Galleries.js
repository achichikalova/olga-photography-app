import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import { storage } from "../firebase/config";
import { motion } from "framer-motion";
import "./Galleries.scss";

const Galleries = () => {
  const [images, setImages] = useState([]);
  const [theme, setTheme] = useState("couple");

  const imagesRef = ref(storage, `/${theme}`);
  const shouldFetch = useRef(true);

  const handleClick = (param) => {
    setTheme(param);
    shouldFetch.current = true;
    setImages([]);
  };

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
  }, [imagesRef, theme]);

  return (
    <div className="recent-work">
      <div className="theme-btns">
        <button onClick={() => handleClick("couple")}>Couple</button>
        <button onClick={() => handleClick("family")}>Family</button>
        <button onClick={() => handleClick("newborn")}>Newborn</button>
        <button onClick={() => handleClick("individual")}>Individual</button>
      </div>
      <motion.div
        className="gallery-carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <ImageGallery autoPlay={true} showIndex={true} items={images} />
      </motion.div>
    </div>
  );
};

export default Galleries;
