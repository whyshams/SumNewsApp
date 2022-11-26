import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins className="adsbygoogle customad"
    
    style={{
        display: "block"
      }}
    data-ad-client="ca-pub-4327171076361001"
    data-ad-slot="6408938244"
    data-ad-format="auto"
    data-full-width-responsive="true"></ins>
  );
};

export default AdBanner;