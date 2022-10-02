import React from "react";
import { ProjectType } from "../InnerLowerWhiteDataComp";

import styles from "./ProjectHorizEntryComp.module.css";
import filledPurplePolygonGraphic from "../../../../../assets/filledpurplepolygon.png";
import polygonZGraphic from "../../../../../assets/polygonwithz.png";
import fadedPurplePolygonGraphic from "../../../../../assets/fadedpurplepolygon.png";
import nodeJsGraphic from "../../../../../assets/nodejsicon.png";
import rubyIconGraphic from "../../../../../assets/rubyicon.png";
import dotIconGraphic from "../../../../../assets/doticon.png";
import starIconGraphic from "../../../../../assets/staricon.png";
import threeBlockIconGraphic from "../../../../../assets/threeblockicon.png";

interface ProjectHorizEntryCompProps {
  projectData: ProjectType;
}

const ProjectHorizEntryComp: React.FC<ProjectHorizEntryCompProps> = (props) => {
  const handleTechStackRendering = (selectedProjectName: string) => {
    if (selectedProjectName === "Project 1") {
      return fadedPurplePolygonGraphic;
    } else if (selectedProjectName === "Project 2") {
      return polygonZGraphic;
    } else {
      return filledPurplePolygonGraphic;
    }
  };

  const handleProjectIconRendering = (selectedIcon: string) => {
    if (selectedIcon === "Node.js") {
      return nodeJsGraphic;
    } else if (selectedIcon === "Ruby") {
      return rubyIconGraphic;
    } else {
      return threeBlockIconGraphic;
    }
  };
  return (
    <div className={styles.projectHorizEntryCompContainer}>
      <div className={styles.leftSideContainer}>
        <img
          alt="filed purple polygon"
          style={{
            height: "3rem",
          }}
          src={handleTechStackRendering(props.projectData.name)}
        ></img>
        <span
          style={{
            marginLeft: "0.5rem",
          }}
        >
          {props.projectData.name}
        </span>
      </div>
      <div className={styles.rightSideContainer}>
        <img
          alt="nodejs icon"
          style={{
            height: "2rem",
          }}
          src={handleProjectIconRendering(props.projectData.techStack)}
        ></img>
        <span>{props.projectData.techStack}</span>
        <img
          alt="dot icon"
          style={{
            height: "1rem",
          }}
          src={dotIconGraphic}
        ></img>
        <span>{props.projectData.herokuStack}</span>
        <img
          alt="dot icon"
          style={{
            height: "1rem",
          }}
          src={dotIconGraphic}
        ></img>
        <span
          style={{
            marginRight: "1rem",
          }}
        >
          {props.projectData.country}
        </span>
        <img
          alt="dot icon"
          style={{
            height: "2rem",
            marginRight: "0.5rem",
          }}
          src={starIconGraphic}
        ></img>
      </div>
    </div>
  );
};

export default ProjectHorizEntryComp;
