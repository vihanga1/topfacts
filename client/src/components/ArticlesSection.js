import image3 from "../images/image3.jpg";

import image5 from "../images/image5.jpg";

import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";

export default function AritlcesSection() {
  return (
    <div className="articles">
      <div className="top-row">
        <div className="article-left-container">
          <div className="single-article">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              <img src={image5} alt="" />
              <div>
                <p>New York History</p>
              </div>
            </a>
          </div>
          <div className="single-article">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              <img src={image3} alt="" />
              <div className="testing">
                <p>
                  Semi-automated offside technology to be used at FIFA World Cup
                  2022™
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="article-right-container">
          <div className="single-article">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              <img src={image7} alt="" />
              <div className="testing">
                <p>What is Color Code?</p>
              </div>
            </a>
          </div>
          <div className="single-article">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              <img src={image8} alt="" />
              <div className="testing">
                <p>Autobahn History</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-row">
        <div className="article-left-container">
          <div className="single-article">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              <img src={image10} alt="" />
              <div className="testing">
                <p>Infliation Basics</p>
              </div>
            </a>
          </div>
          <div className="single-article">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              <img src={image11} alt="" />
              <div className="testing">
                <p>Martinair Flight 138 Crash (1974)</p>
              </div>
            </a>
          </div>
        </div>
        <div className="article-right-container">
          <div className="single-article">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              <img src={image12} alt="" />
              <div className="testing">
                <p>Nikola Tesla 369 theory</p>
              </div>
            </a>
          </div>
          <div className="single-article">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              <img src={image13} alt="" />
              <div className="testing">
                <p>World First Female Prime Mnisiter</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
