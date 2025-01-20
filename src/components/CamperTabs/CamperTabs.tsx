import React, { useState } from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

import { BookingForm } from "../Forms";
import { CamperFeatureCard, CamperReviewCard } from "../Cards";

import { ICamper } from "../../redux/catalog/types.ts";

import { eColors } from "../../utils/eColors.ts";

export const CamperTabs: React.FC<ICamper> = (props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Stack direction="column" spacing={3} sx={{ width: "100%" }}>
      <Stack direction="row" spacing={3} sx={{ position: "relative" }}>
        <Box
          onClick={() => handleTabClick(0)}
          sx={{
            cursor: "pointer",
            paddingBottom: 3,
            borderBottom:
              activeTab === 0 ? `2px solid ${eColors.PRIMARY_LIGHT}` : "none",
          }}
        >
          <Typography variant="h3">Features</Typography>
        </Box>
        <Box
          onClick={() => handleTabClick(1)}
          sx={{
            cursor: "pointer",
            paddingBottom: 3,
            borderBottom:
              activeTab === 1 ? `2px solid ${eColors.PRIMARY_LIGHT}` : "none",
          }}
        >
          <Typography variant="h3">Reviews</Typography>
        </Box>
        <Divider sx={{ width: "100%", position: "absolute", bottom: 0 }} />
      </Stack>

      <Grid container spacing={{ xs: 0, md: 4 }} rowSpacing={3}>
        <Grid item xs={12} md={6} sx={{ paddingLeft: "0!important" }}>
          {activeTab === 0 && <CamperFeatureCard {...props} />}
          {activeTab === 1 && <CamperReviewCard {...props} />}
        </Grid>
        <Grid item xs={12} md={6}>
          <BookingForm />
        </Grid>
      </Grid>
    </Stack>
  );
};
