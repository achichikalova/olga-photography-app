import React, { useRef } from "react";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase/config";
import "./RecentWork.scss";

const RecentWork = () => {
  const [images, setImages] = useState([]);

  const imagesRef = ref(storage, "/newborn");
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

  console.log(images.length);

  return (
    <div className="work">
      {images.map((url) => {
        return <img src={url} alt="gallery" />;
      })}
    </div>
  );
};

export default RecentWork;
