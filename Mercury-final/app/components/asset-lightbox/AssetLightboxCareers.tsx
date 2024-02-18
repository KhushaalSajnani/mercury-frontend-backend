'use client'
import React, { useState } from "react";
import AssetLightboxData from "./AssetLightboxData";

import AssetLightboxApi from "./assetLightboxApi";

import "./lightbox.css"

interface AssetLightboxProps {}

const AssetLightboxCareers: React.FC<AssetLightboxProps> = () => {
  const [assetLightboxData] = useState(AssetLightboxApi);

  return (
    <>
      <section className="m-auto w-full flex flex-nowrap gap-4 px-4 overflow-auto w-full p-0 min1367px:justify-center">
        <AssetLightboxData lightboxData={assetLightboxData} />
      </section>
    </>
  );
};

export default AssetLightboxCareers;
