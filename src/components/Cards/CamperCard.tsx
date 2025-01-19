import React from 'react';
import { Box, Paper, Stack, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ICamper } from '../../redux/catalog/types.ts';

import { Button } from '../Buttons';

import heartIcon from '../../assets/icons/heart.svg';
import starIcon from '../../assets/icons/star-yellow.svg';
import mapIcon from '../../assets/icons/map.svg';

import { generateChips } from '../../utils/utils.tsx';
import { eColors } from '../../utils/eColors.ts';

const EllipsisTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 1,
});

export const CamperCard: React.FC<ICamper> = ({
                                                    id,
                                                  gallery,
                                                  name,
                                                  price,
                                                  rating,
                                                  reviews,
                                                  location,
                                                  description,
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
                                              }) => {
    const navigate = useNavigate();
    
    const navigateToCatalog = (id: string) => {
        navigate(`/catalog/${id}`);
    };
    
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
        <Paper
            key={id}
            elevation={0}
            sx={{
                border: `1px solid ${eColors.GRAY_LIGHT}`,
                borderRadius: '20px',
                padding: '24px',
            }}
        >
            <Stack direction="row" spacing={2}>
                <img
                    src={gallery[0]?.thumb}
                    alt={name}
                    style={{
                        width: '292px',
                        height: '320px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                />
                
                <Stack direction="column" sx={{ width: '100%' }}>
                    <Box my={1.5}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h2">{name}</Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="h2">€{price.toFixed(2)}</Typography>
                            <img
                                src={heartIcon}
                                alt="Favorite"
                                width="24"
                                height="26"
                            />
                        </Stack>
                    </Stack>
                    </Box>
                    
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <img
                                src={starIcon}
                                alt="Rating"
                                width="16"
                                height="16"
                            />
                            <Typography variant="body1">
                                {`${rating} (${reviews.length} Reviews)`}
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <img
                                src={mapIcon}
                                alt="Location"
                                width="16"
                                height="16"
                            />
                            <Typography variant="body1">{location}</Typography>
                        </Stack>
                    </Stack>
                    
                    <EllipsisTypography variant="h5"
                                color="secondary">
                        {description}
                    </EllipsisTypography>
                    
                    <Box my={3}>
                        <Stack
                            direction="row"
                            sx={{
                                flexWrap: 'wrap',
                                gap: 2,
                                justifyContent: 'flex-start',
                            }}
                        >
                            {generateChips(camperFeatures)}
                        </Stack>
                    </Box>
                    
                    <Stack direction="row">
                        <Button variant="primary" onClick={() => navigateToCatalog(id)}>
                            Show more
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
};