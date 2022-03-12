import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subTitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon></FiberManualRecordIcon>
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon></InfoIcon>
      </div>
      {newsArticle("Jackass is Back", "To the moon")}
      {newsArticle(
        "Yesterday was my LWD",
        "Some call it unemployed, I call it UNLEASHED!!"
      )}
      {newsArticle("It's a positive sum game", "- nav.al")}
      {newsArticle("It's the Indian century", "-  Jeffrey mfing Bezos")}
      {newsArticle(
        "It took me 17 years & 114 days to become an overnight success",
        "-  Lionel Patron Messi"
      )}
    </div>
  );
};

export default Widgets;
