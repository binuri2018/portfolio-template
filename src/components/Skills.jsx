import React from "react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
