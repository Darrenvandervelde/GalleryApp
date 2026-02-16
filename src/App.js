import React, { useState } from "react";
import { NavigationBar } from "./components/NavigationBar";
import { GallerySection } from "./components/models/GallerySection"
import { CollectionSection } from "./components/models/CollectionSection"
import { UserSection } from "./components/models/UserSection"
import { SettingSection } from "./components/models/SettingSection"
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("gallery");
  const [darkMode, setDarkMode] = useState(false);


  const renderContent = () => {
    switch (activeSection) {
      case "gallery":
        return(
          <>
          <GallerySection />
          </>
        );

      case "collections":
        return(
          <>
          <CollectionSection />
          </>
        );

      case "settings":
        return(
            <>
            <SettingSection />
            </>
          );

      case "profile":
        return(
          <>
          <UserSection />
          </>
        );

      default:
        return(
          <>
          <GallerySection />
          </>
        );
    }
  };

  return (
    <>
      <NavigationBar setActiveSection={setActiveSection} />
      
      <section id="MainContent" className="MainContent">
        {renderContent()}
      </section>
    </>
  );
}

export default App;
