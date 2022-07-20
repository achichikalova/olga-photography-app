import React, { useRef } from "react";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase/config";
import "./Gallery.scss";
import { NavLink, useParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";

const Gallery = () => {
  const [images, setImages] = useState([]);

  const { theme } = useParams();

  const imagesRef = ref(storage, `/${theme}`);
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      listAll(imagesRef).then((res) => {
        res.items
          .forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImages((prev) => [...prev, url]);
            });
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
  }, [imagesRef]);

  return (
    <section className="gallery">
      <div className="images">
        <ul>
          {images.map((url) => {
            return (
              <li>
                <motion.img
                  src={url}
                  alt="gallery"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.1 }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <NavLink to="/services" className="back">
        <MdKeyboardBackspace /> Back to Services
      </NavLink>
    </section>
  );
};

export default Gallery;
