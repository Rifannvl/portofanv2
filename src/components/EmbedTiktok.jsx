import React, { useEffect } from "react";

function Embed({ tiktokUrl, uniqueId }) {
  useEffect(() => {
    // Dynamically load TikTok's embed script
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up by removing the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite={tiktokUrl}
      data-unique-id={uniqueId}
      data-embed-type="creator"
      style={{ maxWidth: "780px", minWidth: "288px" }}
    >
      <section>
        <a target="_blank" href={tiktokUrl + "?refer=creator_embed"}>
          {uniqueId}
        </a>
      </section>
    </blockquote>
  );
}

export default Embed;
