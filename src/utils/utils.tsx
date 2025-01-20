import { Chip } from '@mui/material';

import transmissionIcon from '../assets/icons/transmission.svg';
import engineIcon from '../assets/icons/engine.svg';
import acIcon from '../assets/icons/ac.svg';
import bathroomIcon from '../assets/icons/bathroom.svg';
import kitchenIcon from '../assets/icons/kitchen.svg';
import tvIcon from '../assets/icons/tv.svg';
import radioIcon from '../assets/icons/radio.svg';
import refrigeratorIcon from '../assets/icons/refrigerator.svg';
import microwaveIcon from '../assets/icons/microwave.svg';
import gasIcon from '../assets/icons/stove.svg';
import waterIcon from '../assets/icons/water.svg';

export const generateChips = (features: {
  [key: string]: string | boolean;
}) => {
  const featureIcons = {
    transmission: transmissionIcon,
    engine: engineIcon,
    AC: acIcon,
    bathroom: bathroomIcon,
    kitchen: kitchenIcon,
    TV: tvIcon,
    radio: radioIcon,
    refrigerator: refrigeratorIcon,
    microwave: microwaveIcon,
    gas: gasIcon,
    water: waterIcon,
  };

  return Object.entries(features).map(([key, value]) => {
    const image = featureIcons[key as keyof typeof featureIcons];
    const isExist = value === true;

    // Determine the label (either the value or key, depending on whether it's a boolean)
    const label =
      typeof value === 'boolean'
        ? capitalizeValue(key)
        : capitalizeValue(value);

    // If value is true, return Chip; otherwise return empty div
    return isExist ? (
      <Chip
        key={key}
        icon={
          image ? (
            <img src={image} alt={key} style={{ width: 20, height: 20 }} />
          ) : undefined
        }
        label={label}
        sx={{ marginLeft: 0 }}
      />
    ) : (
      <div key={key} style={{ display: 'none' }}></div>
    );
  });
};

export const capitalizeValue = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);
