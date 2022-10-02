import React from "react";

import styles from "./InnerLowerWhiteDataComp.module.css";

import searchBarIcon from "../../../../assets/searchicon.png";
import ProjectHorizEntryComp from "./ProjectHorizEntryComp/ProjectHorizEntryComp";

export type ProjectType = {
  name: string;
  techStack: string;
  herokuStack: string;
  country: string;
};

const InnerLowerWhiteDataComp: React.FC = (props) => {
  const dummyProjectList: ProjectType[] = [
    {
      name: "Project 1",
      techStack: "Node.js",
      herokuStack: "heroku-20",
      country: "United States",
    },
    {
      name: "Project 2",
      techStack: "React.js",
      herokuStack: "heroku-20",
      country: "United States",
    },
    {
      name: "Project 3",
      techStack: "Ruby",
      herokuStack: "heroku-20",
      country: "United States",
    },
  ];
  return (
    <div className={styles.innerLowerWhiteDataCompContainer}>
      <div className={styles.searchBarRowContainer}>
        <div className={styles.searchBarInputContainer}>
          <img
            alt="search icon"
            style={{
              height: "1.7rem",
              marginLeft: "0.5rem",
            }}
            src={searchBarIcon}
          ></img>
          <input
            className={styles.innerInputContainer}
            placeholder="Filter apps and pipelines"
          ></input>
        </div>
      </div>
      <div className={styles.projectListContainer}>
        {dummyProjectList.map((projectEntry, index) => (
          <ProjectHorizEntryComp
            key={index}
            projectData={projectEntry}
          ></ProjectHorizEntryComp>
        ))}
      </div>
    </div>
  );
};

export default InnerLowerWhiteDataComp;
