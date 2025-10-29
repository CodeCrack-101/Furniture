import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "block" }}
         data-ad-client="ca-pub-3451902263806766"
         data-ad-slot="1234567890"  // replace with your Ad Slot ID
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
}
