import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled(Box)(({ theme }) => ({
  background: "#fbcb69",
  color: "white",
  padding: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    borderRadius: theme.spacing(0, 0, 1, 1),
  },
}));

export const Footer = () => {
  return (
    <Root>
      <Typography color="white" textAlign="center">
        © 2023 Dromaeon. All rights reserved.
      </Typography>
    </Root>
  );
};
