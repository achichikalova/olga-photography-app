import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import { storage } from "../firebase/config";
import "./RecentWork.scss";

const RecentWork = () => {
  const [images, setImages] = useState([]);
  const [theme, setTheme] = useState("couple");

  const imagesRef = ref(storage, `/${theme}`);
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
    <div className="recent-work">
      <div className="themes">
        <button>Couple</button>
        <button>Family</button>
        <button>Newborn</button>
        <button>Individual</button>
      </div>
      <ImageGallery items={images} />
    </div>
  );
};

export default RecentWork;
