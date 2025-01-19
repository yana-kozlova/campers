import { Paper, Stack, styled, Typography } from '@mui/material';

import React from 'react';
import { eColors } from '../../utils/eColors.ts';

const StyledPaper = styled(Paper, {
    shouldForwardProp: (prop) => prop !== 'checked',
})<{ checked: boolean }>(({ theme, checked }) => ({
    borderRadius: '12px',
    padding: '16px 40px',
    backgroundColor: eColors.WHITE,
    boxShadow: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    maxWidth: '112px',
    cursor: 'pointer',
    textAlign: 'center',
    maxHeight: '96px',
    borderColor: checked ? eColors.PRIMARY : eColors.GRAY_LIGHT,
    '&:hover': {
        borderColor: eColors.PRIMARY,
    },
}));


export const FilterCard = (prop: { icon: string, label: string, checked: boolean, onClick?: () => void }) => {
    const {icon, label, checked} = prop;
    
    return (<StyledPaper checked={checked} onClick={prop.onClick}>
            <Stack
                direction="column"
                alignItems="center"
                spacing={1}>
                <img
                    src={icon}
                    alt={label}
                    width="32"
                    height="32"
                />
                <Typography variant="body2">{label}</Typography>
            </Stack>
        </StyledPaper>);
}