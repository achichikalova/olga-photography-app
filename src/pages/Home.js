import React, { useEffect, useRef, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import Family from "../assets/images/9.jpg";
import ImageGallery from "react-image-gallery";
import { storage } from "../firebase/config";
import "./Home.scss";

const Home = () => {
  const [images, setImages] = useState([]);

  const imagesRef = ref(storage, `/random`);
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      listAll(imagesRef).then((res) => {
        console.log(res);
        res.items
          .forEach((item) => {
            getDownloadURL(item).then((url) => {
              console.log(url);
              setImages((prev) => [...prev, { original: url, thumbnail: url }]);
            });
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
  }, [imagesRef]);

  console.log(images);

  return (
    <section className="home">
      <div className="carousel">
        <ImageGallery
          autoPlay={true}
          showIndex={true}
          showThumbnails={false}
          slideDuration={800}
          slideInterval={5000}
          items={images}
          showFullscreenButton={false}
          showBullets={true}
        />
      </div>
      <div className="info">
        <div className="quote">
          <p>
            "Each of you is <em>unique</em> —
            <br />
            this is what I want to show
            <br />
            through my pictures."
          </p>
        </div>
        <img src={Family} alt="" />
      </div>
    </section>
  );
};

export default Home;
