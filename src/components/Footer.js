import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/GymateLogo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="50px" />
        <Typography
          variant="h5"
          pb="40px"
          mt="20px"
          style={{ fontFamily: "DM Sans", fontWeight: "600" }}
        >
          Made with Love !
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
