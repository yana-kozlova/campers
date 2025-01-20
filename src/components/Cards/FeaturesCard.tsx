import React from "react";
import { Box, Divider, Paper, Stack, styled, Typography } from "@mui/material";

import { ICamper } from "../../redux/catalog/types.ts";

import { capitalizeValue, generateChips } from "../../utils/utils.tsx";
import { eColors } from "../../utils/eColors.ts";

const FeatureCard = styled(Paper)({
  borderRadius: "10px",
  padding: "48px",
  backgroundColor: eColors.SILVER_LIGHT,
  minHeight: "600px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media (max-width: 600px)": {
    padding: "20px",
  },
});

export const CamperFeatureCard: React.FC<ICamper> = (props) => {
  const {
    id,
    length,
    width,
    height,
    tank,
    consumption,
    form,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = props;

  const camperFeatures = {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } as { [key: string]: boolean | string };

  return (
    <FeatureCard key={id} elevation={0}>
      <Box>
        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "flex-start",
          }}
        >
          {generateChips(camperFeatures)}
        </Stack>
      </Box>

      <Stack direction="column" sx={{ width: "100%" }} spacing={2}>
        <Typography variant="h3">Vehicle details</Typography>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          mt={2}
        >
          <Typography variant="body1">Form</Typography>
          <Typography variant="body1">{capitalizeValue(form)}</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          mt={2}
        >
          <Typography variant="body1">Length</Typography>
          <Typography variant="body1">{length}</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          mt={2}
        >
          <Typography variant="body1">Width</Typography>
          <Typography variant="body1">{width}</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          mt={2}
        >
          <Typography variant="body1">Height</Typography>
          <Typography variant="body1">{height}</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          mt={2}
        >
          <Typography variant="body1">Tank</Typography>
          <Typography variant="body1">{tank}</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          mt={2}
        >
          <Typography variant="body1">Consumption</Typography>
          <Typography variant="body1">{consumption}</Typography>
        </Stack>
      </Stack>
    </FeatureCard>
  );
};
