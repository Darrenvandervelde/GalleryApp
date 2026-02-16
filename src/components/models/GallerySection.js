import React, { useState } from "react";
import "./style/gallerySection.css";

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from({ length: 1000 }, (_, index) =>
    `https://picsum.photos/600/600?${index + 1}`
  );

  return (
    <div className="GalleryContainer">
      <h1><img src="https://see.fontimg.com/api/rf5/rg9Rx/YmY1M2RjMTM1MTBhNGY0NGE5MDNkN2Y1OWMyMjUzMzMudHRm/R2FsbGVyeQ/ananda-black-personal-use-regular.png?r=fs&h=65&w=1000&fg=2848A9&bg=0C5DE2&tb=1&s=65"></img></h1>

      <div className="GalleryGrid">
        {images.map((src, index) => (
          <div
            key={index}
            className="ImageCard"
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="ImageModalOverlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="ImageModalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="CloseButton"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Image Preview */}
            <img src={selectedImage} alt="Preview" className="ModalImage" />

            {/* Download Button */}
            <a
              href={selectedImage}
              download={`gallery-image.jpg`}
              className="DownloadButton"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
