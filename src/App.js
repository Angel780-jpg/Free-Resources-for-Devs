import "./App.css";
import { useState } from "react";
import Card from "./components/cards";
import Search from "./components/search";
import Footer from "./components/footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const shouldShowCard = (title, tags) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase().trim();
    return (
      title.toLowerCase().includes(term) || tags.toLowerCase().includes(term)
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1>FREE RESOURCES FOR DEVS</h1>
        <h2>A project for developers</h2>
      </div>

      <div className="tagse">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="cards-container">
        {shouldShowCard("Figma", "design/programming") && (
          <Card
            title="Figma"
            desc="Free collaborative interface design tool (great for devs too)."
            tags="design/programming"
            link="https://www.figma.com/"
          />
        )}
        {shouldShowCard("freeCodeCamp", "programming") && (
          <Card
            title="freeCodeCamp"
            desc="Full free certifications in web dev, JS, Python, data science, and
          more."
            tags="programming"
            link="https://www.freecodecamp.org/"
          />
        )}
        {shouldShowCard("Canva", "design") && (
          <Card
            title="Canva"
            desc="Easy graphic design tool with thousands of free templates and
          elements."
            tags="design"
            link="https://www.canva.com/"
          />
        )}
        {shouldShowCard("Codewars", "programming") && (
          <Card
            title="Codewars"
            desc="Fun coding challenges (katas) to practice programming skills in many
          languages."
            tags="programming"
            link="https://www.codewars.com/"
          />
        )}
        {shouldShowCard("Inkscape", "design") && (
          <Card
            title="Inkscape"
            desc="Free open-source vector graphics editor (alternative to Illustrator)."
            tags="design"
            link="https://inkscape.org/"
          />
        )}
        {shouldShowCard("Flaticon", "design/icons") && (
          <Card
            title="Flaticon"
            desc="Huge library of free icons in SVG, PNG (attribution required for free
          version)."
            tags="design/icons"
            link="https://www.flaticon.com/"
          />
        )}
        {shouldShowCard("Pixabay", "design/images") && (
          <Card
            title="Pixabay"
            desc="Free stock photos, illustrations, and vectors (no attribution needed)."
            tags="design/images"
            link="https://pixabay.com/"
          />
        )}
        {shouldShowCard("W3Schools", "courses/programming") && (
          <Card
            title="W3Schools"
            desc="Clear tutorials and references for HTML, CSS, JS, Python, SQL, and
          more."
            tags="courses/programming"
            link="https://www.w3schools.com/"
          />
        )}
        {shouldShowCard("Phosphor Icons", "icons") && (
          <Card
            title="Phosphor Icons"
            desc="Beautiful, open-source icons (line, filled, duotone) MIT licensed."
            tags="icons"
            link="https://phosphoricons.com/"
          />
        )}
        {shouldShowCard("Lucide Icons", "icons") && (
          <Card
            title="Lucide Icons"
            desc="Minimalist, customizable open-source icons (fork of Feather Icons)."
            tags="icons"
            link="https://lucide.dev/"
          />
        )}

        {shouldShowCard(
          "Name of the resource",
          "write the tag here/write the tag here",
        ) && (
          <Card
            title="Name of the resource"
            desc="writte a description of the resource"
            tags="write the tag here / write the tag here "
            link="put the resource link here"
          />
        )}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
