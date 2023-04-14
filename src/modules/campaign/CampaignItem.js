import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import CampCategory from "./partials/CampCategory";
import CampMeta from "./partials/CampMeta";
import CampDesc from "./partials/CampDesc";
import CampTitle from "./partials/CampTitle";
import CampAuth from "./partials/CampAuth";
import CampImage from "./partials/CampImage";

const CampaignItem = () => {
  return (
    <div>
      <CampImage></CampImage>
      <div className="px-5 py-4">
        <CampCategory text="Education"></CampCategory>
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
        </div>
        <CampAuth></CampAuth>
      </div>
    </div>
  );
};

export default CampaignItem;
