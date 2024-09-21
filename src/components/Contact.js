import React from "react";
import { Link } from "@material-ui/core";
import { Grow } from "@material-ui/core";
import { Box, Stack } from "@mui/material";
import LocalPhoneIcon from "@material-ui//icons/LocalPhone";
import EmailIcon from "@material-ui//icons/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
            ancaprodan01@gmail.com
          </p>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Link href="https://github.com/Anca212000" target="_blank" style={styleLinkIcon}>
            <GitHubIcon style={styleIcon} id="contact-icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anca-prodan-358069227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
            style={styleLinkIcon}
          >
            <LinkedInIcon style={styleIcon} id="contact-icon" />
          </Link>
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
