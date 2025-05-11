import React, { useState, useEffect } from "react";
import { Grow, Typography, Box, makeStyles } from "@material-ui/core";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";

import data from "../static/infoSkills";
import { Stack } from "@mui/material";

const useStyles = makeStyles({
  titleSkill: {
    color: "#fffade",
    fontWeight: "800",
    fontFamily: "AspergitRegular",
    letterSpacing: "2px",
    textShadow: "0px 0px 2px darkgrey",
    textTransform: "uppercase",
  },
});

function Child({ data, setClick }) {
  const classes = useStyles();

  return (
    <div
      className="childComponent"
      onClick={() => setClick(data)}
      onMouseOver={(e) => {
        // Add hover effect here
        e.target.style.transform = "scale(1.1)";
        e.target.style.transition = "transform 0.3s ease-in-out";
      }}
      onMouseOut={(e) => {
        // Remove hover effect here
        e.target.style.transform = "scale(1)";
        e.target.style.transition = "transform 0.3s ease-in-out";
      }}
    >
      <Stack alignItems="center">
        <Typography variant="h5" className={classes.titleSkill}>
          {data.name}
        </Typography>
        {data.image && <img src={data.image} width={data.width} />}
      </Stack>
    </div>
  );
}

export default function Technologies({ checked }) {
  const [bubble, setBubble] = useState("");
  const options = {
    size: 220,
    minSize: 100,
    gutter: 10,
    provideProps: true,
    numCols: 6,
    fringeWidth: 80,
    yRadius: 100,
    xRadius: 100,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 6,
  };

  useEffect(() => {
    const bubbles = document.querySelector("._2MD0k");
    const img = document.querySelectorAll(".childComponent");
    img.forEach(
      (i) =>
        (i.ondragstart = () => {
          return false;
        })
    );
    const dragspeed = 2;
    let isDown = false;
    let startX;
    let startY;
    let scrollLeft;
    let scrollTop;

    bubbles.addEventListener("mousedown", (e) => {
      isDown = true;
      bubbles.classList.add("active");
      startX = e.pageX - bubbles.offsetLeft;
      startY = e.pageY - bubbles.offsetTop;
      scrollLeft = bubbles.scrollLeft;
      scrollTop = bubbles.scrollTop;
    });
    bubbles.addEventListener("mouseleave", () => {
      isDown = false;
      bubbles.classList.remove("active");
    });
    bubbles.addEventListener("mouseup", () => {
      isDown = false;
      bubbles.classList.remove("active");
    });
    // bubbles.addEventListener("mouseover", (e) => {
    //   isDown = true;
    //   bubbles.classList.add("active");
    //   startX = e.pageX - bubbles.offsetLeft;
    //   startY = e.pageY - bubbles.offsetTop;
    //   scrollLeft = bubbles.scrollLeft;
    //   scrollTop = bubbles.scrollTop;
    // });
    bubbles.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - bubbles.offsetLeft;
      const y = e.pageY - bubbles.offsetTop;
      const walk = (x - startX) * dragspeed;
      const topwalk = (y - startY) * dragspeed;
      bubbles.scrollLeft = scrollLeft - walk;
      bubbles.scrollTop = scrollTop - topwalk;
    });
    // bubbles.addEventListener("mouseout", (e) => {
    //   isDown = false;
    //   bubbles.classList.remove("active");
    // });
  });

  const handleClick = (bub) => {
    setBubble(bub);
  };

  const children = data?.map((data, i) => {
    return (
      <Child data={data} className="child" key={i} setClick={handleClick} />
    );
  });

  return (
    <Grow
      in={checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(checked ? { timeout: 1800 } : {})}
    >
      <Box alignItems="center" py={2}>
        <BubbleUI key={1} options={options} className="myBubbleUI">
          {children}
        </BubbleUI>
      </Box>
    </Grow>
  );
}
