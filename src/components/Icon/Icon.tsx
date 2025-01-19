import React from 'react';
import { Stack, Typography } from '@mui/material';

const Icon: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
    <Stack direction="row" spacing={1} alignItems="center">
        <img src={icon} alt={text} width="16" height="16" />
        <Typography variant="body1">{text}</Typography>
    </Stack>
);