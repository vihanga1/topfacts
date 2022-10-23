import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import BigImage from "./BigImage";

export default function MainSection() {
  return (
    <div className="main-section">
      <BigImage />
      <div className="right-container">
        <div className="right-image-container">
          <a
            href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com"
            className="bottom-fix"
          >
            <img src={image2} alt="Hot News" />
            <div className="side-right-text">
              El Chapo (Sinaloa Cartel) vs Pablo Escobar (Medellin Cartel)
            </div>
          </a>
        </div>
        <div className="right-image-container">
          <a
            href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com"
            className="bottom-fix"
          >
            <div></div>
            <img src={image1} alt="Hot News" />
            <div className="side-right-text">Revolution vs Evolution</div>
          </a>
        </div>
      </div>
    </div>
  );
}
