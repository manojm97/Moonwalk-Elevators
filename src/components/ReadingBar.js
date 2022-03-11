import React from 'react';
import { useState, useEffect } from "react";
import styled from "styled-components";

// Bar Styled Component
const Bar = styled.div`
  position: fixed;
  height: 7px;
  border-radius: 0px 2px 0px 0px;
  background: linear-gradient(
    160deg,
    hsl(0deg 0% 0%) 0%,
    hsl(196deg 100% 11%) 14%,
    hsl(193deg 100% 15%) 27%,
    hsl(190deg 100% 20%) 39%,
    hsl(188deg 100% 24%) 51%,
    hsl(187deg 100% 29%) 61%,
    hsl(186deg 100% 34%) 71%,
    hsl(185deg 100% 39%) 80%,
    hsl(184deg 100% 45%) 90%,
    hsl(184deg 100% 50%) 100%
  );
`;
function ReadingBar() {
  //Width State
  const [width, setWidth] = useState(0);

  // scroll function
  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    // store percentage in state
    setWidth(percent);
  };

  //useEffect to control the component lifecycle
  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });
  return <Bar style={{ width: width + "%" }}></Bar>;
}

export default ReadingBar;
