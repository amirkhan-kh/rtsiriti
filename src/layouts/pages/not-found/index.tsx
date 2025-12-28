import React from "react";
import FuzzyText from "../../../components/FuzzyText";

const NotFound: React.FC = () => {
  return (
    <div className="bg-[#4c75f6] min-h-screen grid place-content-center border-b-2 border-white">
      <FuzzyText baseIntensity={0.2}>404</FuzzyText>
    </div>
  );
};

export default NotFound;
