import { Link } from "react-router-dom";
import image4 from "../images/image4.jpg";

export default function Features() {
  return (
    <div className="features-container">
      <div className="features-left-container">
        <Link to="/contact">
          <div className="features-left-container-image">
            <img src={image4} alt="Supreme Court" />
          </div>
          <div className="features-left-container-text">
            <h1>What Are the Pandora Papers?</h1>
            <p>
              he Pandora Papers are a release of nearly 12 million leaked
              documents that reveal the hidden and sometimes unethical or
              corrupt dealings of the global wealthy and elite—including
              prominent world leaders, politicians, corporate executives,
              celebrities, and billionaires. It is the largest such data dump
              released to date, larger than the previous Panama Papers and
              Paradise Papers leaks.
            </p>
            <p>
              The papers reveal the offshore interests and activities of such
              individuals along with their tax sheltering schemes. The name
              "Pandora" was given to these documents as a reference to the
              ancient myth of Pandora's Box which evokes an outpouring of
              trouble and woe.
            </p>
            <small>Posted On: 2022/12/14</small>
          </div>
        </Link>
      </div>
      <div className="features-right-container">
        <ul>
          <li>
            <h2>Related Articles</h2>
          </li>
          <li className="re-link">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              Is Nirupama Rajapaksa related to Mahinda?
            </a>
          </li>
          <li className="re-links">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              How many people are in Pandora papers?
            </a>
          </li>
          <li className="re-links">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              Who created Pandora Papers?
            </a>
          </li>
          <li className="re-links">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              What are the Panama Papers?
            </a>
          </li>
          <li className="re-links">
            <a href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com">
              What do the Panama papers reveal?
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
