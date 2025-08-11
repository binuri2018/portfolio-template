import React from "react";
import { aboutData } from "../data/portfolioData";

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>{aboutData.text}</p>
    </section>
  );
}
