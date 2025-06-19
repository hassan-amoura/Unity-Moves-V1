export default function Shop() { return <div className="p-8">Shop All!</div>; }

import { useEffect } from "react";

export default function Shop() {
  useEffect(() => {
    window.location.href = "https://bkscqu-kz.myshopify.com/";
  }, []);

  return (
    <div className="text-center py-20">
      <p className="text-lg">Redirecting to our Shopify store...</p>
    </div>
  );
}
