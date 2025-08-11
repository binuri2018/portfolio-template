import React from "react";
import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      <ul>
        {educationData.map((edu, index) => (
          <li key={index}>
            <strong>{edu.year}</strong> - {edu.degree} @ {edu.institution}
          </li>
        ))}
      </ul>
    </section>
  );
}
