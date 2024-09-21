import React from "react";
import { Box } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import SchoolIcon from "@material-ui/icons/School";
import CodeIcon from "@mui/icons-material/Code";

const styleContentTimeline = {
  color: "#fff",
  fontFamily: "AspergitRegular",
  letterSpacing: "2px",
  borderRadius: "40px",
  border: "1px solid rgba(255, 255, 255, .25)",
  backdropFilter: "blur(5px)",
  webkitBackdropFilter: "blur(5px)",
  boxShadow:
    "rgba(255, 255, 255, 0.10) 0px 8px 16px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px",
};

export default function WorkExperience() {
  function calculateYearsAndMonths(startDate, endDate) {
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();

    let years = endYear - startYear;
    let months = endMonth - startMonth;

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  }

  const startDate = new Date("December 10, 2022");
  const endDate = new Date();

  const { years, months } = calculateYearsAndMonths(startDate, endDate);

  return (
    <Box alignItems="center" justifyContent="center" minHeight="100vh">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            ...styleContentTimeline,
            backgroundImage:
              "linear-gradient(45deg,  rgba(201, 125, 38, 1), rgba(31, 0, 74, 1))",
          }}
          contentArrowStyle={{ marginTop: "10px" }}
          date={
            "2024 - present" +
            " ✮ Total experience of " +
            years +
            " years " +
            (months ? " and " + months + " months" : "")
          }
          iconStyle={{ background: "#17003d", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "CocogooseUltralight", letterSpacing: "2px" }}
          >
            Computer Programmer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <strong>Solutions Development Group Srl</strong>, Suceava, Romania
          </h4>
          <p>Vue.js, Tailwind CSS, TypeScript</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            ...styleContentTimeline,
            backgroundImage:
              "linear-gradient(45deg,  rgba(201, 125, 38, 1), rgba(31, 0, 74, 1))",
          }}
          contentArrowStyle={{ marginTop: "10px" }}
          date="2023 - 2024"
          iconStyle={{ background: "#17003d", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "CocogooseUltralight", letterSpacing: "2px" }}
          >
            Web Designer / Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <strong>IBB IT SYSTEM</strong>, Suceava, Romania
          </h4>
          <p>
            PHP, Laravel, Alpine.js, HTML, CSS, Bootstrap, MySQL, Wordpress,
            Photoshop, Ilustrator
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            ...styleContentTimeline,
            backgroundImage:
              "linear-gradient(45deg,  rgba(201, 125, 38, 1), rgba(31, 0, 74, 1))",
          }}
          contentArrowStyle={{ marginTop: "10px" }}
          date="2022 - 2024"
          iconStyle={{ background: "#17003d", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "CocogooseUltralight", letterSpacing: "2px" }}
          >
            Master's in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            'Stefan cel Mare' University of Suceava, Romania
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            ...styleContentTimeline,
            backgroundImage:
              "linear-gradient(45deg,  rgba(201, 125, 38, 1), rgba(31, 0, 74, 1))",
          }}
          contentArrowStyle={{ marginTop: "10px" }}
          date="2021 - 2022"
          iconStyle={{ background: "#17003d", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "CocogooseUltralight", letterSpacing: "2px" }}
          >
            Full stack developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            eConfaire Immersive Design, Suceava, Romania
          </h4>
          <p>PHP, Yii2, AJAX, MySQL, HTML, Bootstrap, CSS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            ...styleContentTimeline,
            backgroundImage:
              "linear-gradient(45deg,  rgba(201, 125, 38, 1), rgba(31, 0, 74, 1))",
          }}
          contentArrowStyle={{ marginTop: "10px" }}
          date="2018 - 2022"
          iconStyle={{ background: "#17003d", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "CocogooseUltralight", letterSpacing: "2px" }}
          >
            Bachelor of Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            'Stefan cel Mare' University of Suceava, Romania
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgba(201, 125, 38, 1)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </Box>
  );
}
