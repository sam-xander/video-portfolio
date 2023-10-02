import { useEffect, useRef, useState } from "react";

const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  const galleryRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const videoRef7 = useRef(null);
  const videoRef8 = useRef(null);
  const videoRef9 = useRef(null);
  const videoRef10 = useRef(null);
  const videoRef11 = useRef(null);
  const videoRef12 = useRef(null);

  const handleVideoHover = (videoRef) => {
    videoRef.current.play();
    setIsHovered(true);
  };

  const handleVideoHoverOut = (videoRef) => {
    videoRef.current.pause();
    setIsHovered(false);
  };

  useEffect(() => {
    const titleElement = document.getElementById("title");
    const galleryElement = document.getElementById("gallery");
    if (isHovered) {
      titleElement.classList.add("blur");
      galleryElement.style.transform = "scale(1)";
    } else {
      titleElement.classList.remove("blur");
      galleryElement.style.transform = "scale(1.2)";
    }
  }, [isHovered]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX,
        mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

      const maxX = galleryRef.current.offsetWidth - window.innerWidth,
        maxY = galleryRef.current.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

      galleryRef.current.animate(
        {
          transform: `translate(${panX}px, ${panY}px) scale(${
            isHovered ? 1 : 1.5
          })`,
        },
        {
          duration: 4000,
          fill: "forwards",
          easing: "ease",
        }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div ref={galleryRef} id="gallery">
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef1}
          src="/HughesHall.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef1)}
          onMouseLeave={() => handleVideoHoverOut(videoRef1)}
        ></video>
        <div className="tile-text">
          <h3>Hughes Hall May Ball</h3>
        </div>
      </a>
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef2}
          src="/Spektra - The Depo - Farrago.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef2)}
          onMouseLeave={() => handleVideoHoverOut(videoRef2)}
        ></video>
        <div className="tile-text">
          <h3>Spektra - The Depø - Farrago</h3>
        </div>
      </a>
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef3}
          src="/2021best.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef3)}
          onMouseLeave={() => handleVideoHoverOut(videoRef3)}
        ></video>
        <div className="tile-text">
          <h3>2021 Reel</h3>
        </div>
      </a>
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef4}
          src="/Tankus.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef4)}
          onMouseLeave={() => handleVideoHoverOut(videoRef4)}
        ></video>
        <div className="tile-text">
          <h3>Slak Nanny Events</h3>
        </div>
      </a>
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef5}
          src="/wsp.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef5)}
          onMouseLeave={() => handleVideoHoverOut(videoRef5)}
        ></video>
        <div className="tile-text">
          <h3>WSP Solicitors</h3>
        </div>
      </a>
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef6}
          src="/shoot.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef6)}
          onMouseLeave={() => handleVideoHoverOut(videoRef6)}
        ></video>
        <div className="tile-text">
          <h3>Short Action Film</h3>
        </div>
      </a>
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef7}
          src="/Reelvideo-7052.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef7)}
          onMouseLeave={() => handleVideoHoverOut(videoRef7)}
        ></video>
        <div className="tile-text">
          <h3>Lake District 2023</h3>
        </div>
      </a>
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef8}
          src="/2022reel.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef8)}
          onMouseLeave={() => handleVideoHoverOut(videoRef8)}
        ></video>
        <div className="tile-text">
          <h3>2022 Reel</h3>
        </div>
      </a>
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef9}
          src="/2020reel.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef9)}
          onMouseLeave={() => handleVideoHoverOut(videoRef9)}
        ></video>
        <div className="tile-text">
          <h3>2020 Reel</h3>
        </div>
      </a>
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef10}
          src="/Lookbook.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef10)}
          onMouseLeave={() => handleVideoHoverOut(videoRef10)}
        ></video>
        <div className="tile-text">
          <h3>Adidas X Pharell Lookbook</h3>
        </div>
      </a>
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef11}
          src="/echo.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef11)}
          onMouseLeave={() => handleVideoHoverOut(videoRef11)}
        ></video>
        <div className="tile-text">
          <h3>Echo Short Film</h3>
        </div>
      </a>
      <a
        href="https://www.youtube.com/shorts/gqrpnJ56EmU"
        className={`tile ${isHovered ? "semi-active" : ""}`}
      >
        <video
          ref={videoRef12}
          src="/SoundFactory.mp4"
          type="video/mp4"
          muted
          loop
          onMouseEnter={() => handleVideoHover(videoRef12)}
          onMouseLeave={() => handleVideoHoverOut(videoRef12)}
        ></video>
        <div className="tile-text">
          <h3>Sound Factory</h3>
        </div>
      </a>
    </div>
  );
};

export default Gallery;
