import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography
      color="#FF2625"
      fontWeight="600"
      fontSize="36px"
      sx={{
        fontFamily: "DM Sans",
        borderBottom: "4px solid #ff2625",
        width: { lg: "22%", sm: "45%", xs: "65%" },
      }}
    >
      Gymate <br />
      <span style={{ color: "#000", fontSize: "26px", fontWeight: "600" }}>
        The Fitness Club
      </span>
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
      style={{ fontFamily: "DM Sans" }}
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
      style={{ fontFamily: "DM Sans" }}
    >
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack style={{ fontFamily: "DM Sans" }}>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#FF2625",
          padding: "14px",
          fontSize: "21px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
      style={{ fontFamily: "DM Sans" }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
