import React from "react";
import { Link } from "react-router-dom";
import { Grow } from "@material-ui/core";
import { Box, Stack } from "@mui/material";

const styleCards = {
  color: "#fffade",
  fontFamily: "AspergitRegular",
  letterSpacing: "2px",
  borderRadius: "40px",
  boxShadow: "0 0 30px rgb(18, 12, 23) inset",
  backgroundImage:
    "linear-gradient(45deg,  rgba(243, 236, 120, 0.5), rgba(201, 0, 89, 0.8))",
  zIndex: "2",
};

const styleContentCard = {
  display: "grid",
  position: "absolute",
  bottom: "0",
  left: "0",
  textAlign: "center",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage:
    "linear-gradient(45deg,  rgba(201, 125, 38, 0.8), rgba(31, 0, 74, 0.8))",
  borderRadius: "40px",
  border: "1px solid rgba(255, 255, 255, .25)",
  zIndex: "1",
};

const buttonShowMore = {
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  color: "#fff",
  fontFamily: "CocogooseRegular",
  textDecoration: "none",
  textShadow: "2px 2px 16px #c9005ac5, -1px 0 10px #c9005ac5",
};

export default function ProjectCard({ checked, infoProject }) {
  return (
    <Grow
      in={checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Box
        id="Proj3dCards"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        sx={{ py: 5, mx: "auto" }}
      >
        <div style={styleCards} id="projectCardTransform">
          <div>
            <img
              src={infoProject.imageUrl}
              style={{
                objectFit: "cover",
                width: "100%",
                minHeight: "30vh",
                minWidth: "20vh",
                borderRadius: "40px",
                opacity: "1",
              }}
            />
            <div style={styleContentCard} id="infoCard">
              <Stack id="textInfoCard">
                {/* style={styleTextInfoCard} */}
                <h3
                  style={{
                    textShadow: "2px 2px 1px #000, 2px 2px 10px 5px #fff",
                    fontWeight: "bold",
                  }}
                >
                  {infoProject.title}
                </h3>
                <h5>{infoProject.shortDescription}</h5>
              </Stack>
              <Link
                to={{
                  pathname: infoProject.title + "/" + infoProject.id,
                  id: infoProject.id,
                }}
              >
                <span id="buttonProjShow">
                  <button style={buttonShowMore}>Show more</button>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Box>
    </Grow>
  );
}
