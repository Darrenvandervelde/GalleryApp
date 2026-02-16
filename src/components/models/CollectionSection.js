import React from "react";
import "./style/collectionSection.css";

export const CollectionSection = () => {
  // Sample collections data
  const collections = [
    { id: 1, title: "Nature", count: 120, cover: "https://picsum.photos/300/200?random=101" },
    { id: 2, title: "Cities", count: 85, cover: "https://picsum.photos/300/200?random=102" },
    { id: 3, title: "Animals", count: 60, cover: "https://picsum.photos/300/200?random=103" },
    { id: 4, title: "Art", count: 45, cover: "https://picsum.photos/300/200?random=104" },
    { id: 5, title: "Travel", count: 70, cover: "https://picsum.photos/300/200?random=105" },
    { id: 6, title: "Food", count: 50, cover: "https://picsum.photos/300/200?random=106" },
  ];

  return (
    <div className="CollectionContainer">
      <h1><img src="https://see.fontimg.com/api/rf5/rg9Rx/YmY1M2RjMTM1MTBhNGY0NGE5MDNkN2Y1OWMyMjUzMzMudHRm/Q29sbGVjdGlvbnM/ananda-black-personal-use-regular.png?r=fs&h=65&w=1000&fg=2848A9&bg=0C5DE2&tb=1&s=65"/></h1>

      <div className="CollectionGrid">
        {collections.map((col) => (
          <div key={col.id} className="CollectionCard">
            <div className="CollectionImage">
              <img src={col.cover} alt={col.title} />
            </div>
            <div className="CollectionInfo">
              <h3>{col.title}</h3>
              <p>{col.count} images</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
