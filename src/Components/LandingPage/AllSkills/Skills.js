import React, { useReducer } from "react";
import "./Skills.css";
import skillData from "./skills.json";
import { Container } from "react-bootstrap";
import SkillsItem from "./SkillsItem/SkillsItem";
import { Fade, Slide } from "react-awesome-reveal";
import ProjectsSkillsNavbar from "../../Shared/ProjectsSkillsNavbar/ProjectsSkillsNavbar";
import styled from "@emotion/styled";

const skillsState = {
  allSkills: true,
  mernStack: false,
  tools: false,
};

const skillsReducer = (state = skillsState, action) => {
  switch (action.type) {
    case "ALL_SKILL":
      return { allSkills: true, mernStack: false, tools: false };
    case "MERN_STACK":
      return { mernStack: true, allSkills: false, tools: false };
    case "TOOLS":
      return { tools: true, mernStack: false, allSkills: false };

    default:
      return state;
  }
};

const Skills = () => {
  const [state, dispatch] = useReducer(skillsReducer, skillsState);

  const skillsData =
    (state.allSkills && skillData) ||
    (state.mernStack && skillData.slice(2, 10)) ||
    (state.tools && skillData.slice(10, 21));

  return (
    <SkillsContainer>
      <section>
        <h3
          style={{
            textAlign: "center",
            fontSize: "2.55rem",
            textTransform: "uppercase",
          }}
        >
          Skills
        </h3>

        {skillsData && (
          <div>
            <SkillsItem skillsData={skillsData} />
          </div>
        )}
      </section>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
display: flex;
justify-content:center;
align-items;center;
.row{
  width: 88vw !important;
}`;
