import React from "react";
import { heroData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroData.image} alt={heroData.name} />
      <h1>{heroData.name}</h1>
      <h2>{heroData.title}</h2>
      <p>{heroData.description}</p>
    </section>
  );
}
