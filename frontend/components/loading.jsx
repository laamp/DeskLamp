import React from "react";

const Loading = () => (
  <section id="loading-wrapper">
    <section id="loading-modal">
      <img id="loading-image" src={window.basecampLogoUrl} />
      <h1 id="loading-text">Loading...</h1>
    </section>
  </section>
);

export default Loading;
