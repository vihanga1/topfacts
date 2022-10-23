import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/FadeLoader";

export default function BigImage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const imageSrc =
    "https://drive.google.com/uc?export=view&id=1HsGrIvRcVpGrXqXoucDlV0Q7OZgTui5P";
  return (
    <div className={`left-container ${loading ? "" : "no-shadow"}`}>
      {loading ? (
        <PulseLoader color="#852a2a" />
      ) : (
        <a
          href="https://cp1.awardspace.net/file-manager/www/vihangamy.atwebpages.com "
          className="bottom-fix"
        >
          <img src={imageSrc} alt="Hot News" />
          <div className="left-cotainer-main-text">
            Earth's last chance to find a habitable planet before a lack of
            resources causes the human race to go extinct (The Story Behind
            Interstellar)
          </div>
        </a>
      )}
    </div>
  );
}
