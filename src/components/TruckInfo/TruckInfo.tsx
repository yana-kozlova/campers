import React from 'react';
import { Stack, Typography } from '@mui/material';

import { ICamper } from '../../redux/catalog/types.ts';

import starIcon from '../../assets/icons/star-yellow.svg';
import mapIcon from '../../assets/icons/map.svg';


export const TruckInfo: React.FC<ICamper> = ({
                                                 id, gallery, name, price, rating, reviews, location, description,
                                             }) => {
    
    return (<Stack direction="column" spacing={3} sx={{width: '100%'}}>
        <Stack direction="column" spacing={1}>
            <Typography variant="h2">{name}</Typography>
            <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <img
                        src={starIcon}
                        alt="Rating"
                        width="16"
                        height="16"
                    />
                    <Typography variant="body1">
                        {`${rating} (${reviews?.length} Reviews)`}
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
        </Stack>
        
        <Typography variant="h2">€{price.toFixed(2)}</Typography>
        <Stack direction="row" spacing={5}>
            {gallery.map((item, index) => (<img
                key={index}
                src={item.thumb}
                alt={`${name} photo ${index}`}
                style={{
                    width: '292px', height: '312px', objectFit: 'cover', borderRadius: '10px',
                }}
            />))}
        </Stack>
        <Typography variant="h5" color="secondary">{description}</Typography>
    </Stack>)
}