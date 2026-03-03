import React from "react";
import { Link } from "@material-ui/core";
import { Grow } from "@material-ui/core";
import { Box, Stack } from "@mui/material";
import LocalPhoneIcon from "@material-ui//icons/LocalPhone";
import EmailIcon from "@material-ui//icons/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Swal from "sweetalert2";

const styleLinkIcon = {
  textDecoration: "none",
};

const styleIcon = {
  fontSize: "3.5rem",
  color: "#fffade",
};

const styleDetails = {
  fontFamily: "AdequateExtraLight", // 'RighteousRegular',
  fontWeight: "bold",
  textWrap: "nowrap",
  letterSpacing: "3px",
  marginLeft: "10px",
  color: "#fffade",
};

const styleContactForm = {
  display: "grid",
  gap: "1rem",
  marginTop: "2rem",
  borderRadius: "2rem",
  padding: "3rem",
  width: "auto",
  height: "auto",
  alignItems: "center",
  justifyContent: "center",
};

const buttonShowMore = {
  height: "5vh",
  cursor: "pointer",
  color: "#fff",
  fontFamily: "CocogooseRegular",
  //   fontSize: "1.2vw",
  letterSpacing: "1px",
  textShadow: "2px 2px 16px #c9005ac5, -1px 0 10px #c9005ac5",
};
const buttonViewResume = {
  ...buttonShowMore,
  fontSize: "20px",
  width: '20rem',
  height: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

export default function Contact({ checked }) {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6e83a916-4c3a-49ac-aca4-295300a98bcb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        width: 600,
        padding: "3em",
        color: "#fff",
        background: "#260c52",
      });
    }
  };

  return (
    <Grow
      in={checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(checked ? { timeout: 1800 } : {})}
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        minHeight="80vh"
        sx={{ pt: 6, mx: "auto" }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <LocalPhoneIcon style={styleIcon} />
          <p style={styleDetails} id="contact">
            (+40) 747 612 742
          </p>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <EmailIcon style={styleIcon} />
          <p style={styleDetails} id="contact">
            anca.prodan21@gmail.com
          </p>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Link href="https://github.com/Anca212000"
            style={styleLinkIcon}
            target="_blank">
            <GitHubIcon style={styleIcon} id="contact-icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anca-prodan-358069227"
            style={styleLinkIcon}
            target="_blank"
          >
            <LinkedInIcon style={styleIcon} id="contact-icon" />
          </Link>
          <Link
            href="https://codepen.io/ank01"
            style={styleLinkIcon}
            target="_blank"
          >
            {/* <CodePenIcon style={styleIcon} id="contact-icon" /> */}
            <svg id="contact-icon" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640" style={{ width: "50px", height: "auto", backgroundColor: "white", fontSize: "3.5rem", color: "rgb(255, 250, 222)" }}>
              <path d="M566.3 223.7L332.3 67.7C324.3 62.8 315.8 62.7 307.7 67.7L73.7 223.7C67.7 227.7 64 234.8 64 242L64 398C64 405.1 67.7 412.3 73.7 416.3L307.7 572.3C315.7 577.2 324.2 577.3 332.3 572.3L566.3 416.3C572.3 412.3 576 405.2 576 398L576 242C576 234.9 572.3 227.7 566.3 223.7zM342 127.1L514.3 242L437.4 293.4L342 229.7L342 127.1zM298 127.1L298 229.7L202.6 293.4L125.7 242L298 127.1zM108 283.1L163.1 320L108 356.8L108 283.1zM298 512.8L125.7 398L202.6 346.6L298 410.3L298 512.8zM320 372L242.3 320L320 268L397.7 320L320 372zM342 512.9L342 410.3L437.4 346.6L514.3 398L342 512.9zM532 356.9L476.9 320L532 283.1L532 356.8z"></path>
            </svg>
          </Link>
        </Stack>

        <Stack spacing={2} sx={{ pt: 2 }}>
          <button style={buttonViewResume} id="buttonProjShow" onClick={() => window.open('https://drive.google.com/file/d/1ZKYh4nZXG-dtV9ukzi2N2f6mukqW89R5/view?usp=sharing', '_blank')}>
            VIEW MY RESUME
            <ChevronRight style={styleIcon} />
          </button>
        </Stack>

        <form style={styleContactForm} id="form-contact" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            required
          />
          {/* <input
            type="text"
            name="lName"
            placeholder="Last Name"
            autoComplete="off"
          /> */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            placeholder="Write a message"
            rows="5"
            autoComplete="off"
            required
          />

          <button type="submit" style={buttonShowMore} id="buttonProjShow">
            SEND
          </button>
        </form>
      </Box>
    </Grow>
  );
}
