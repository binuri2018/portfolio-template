import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer>
      <p>{portfolioData.footer.text}</p>
    </footer>
  );
}
