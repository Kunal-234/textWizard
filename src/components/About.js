import React from "react";

export default function About(props) {
  return (
    <div className={` m-2 text-${props.mode === `light` ? `light` : `dark`} `}>
      <h1 className="my-3">About us</h1>
      <p>
        Hi, I'm Kunal Kumar, a passionate and aspiring tech enthusiast currently
        pursuing a Bachelor of Computer Applications (BCA) at Srinath
        University,Jamshedpur. My journey in the world of technology started with a deep
        curiosity about how software works, leading me to explore various
        aspects of web development and programming.
      </p>
      <p>
        If you'd like to collaborate or discuss anything tech-related, feel free
        to connect with me!
      </p>
    </div>
  );
}
