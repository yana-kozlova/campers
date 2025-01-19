import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';

import { getCatalog } from "../../redux/catalog/operations";
import {
    selectAllCampers, selectCampersFetched, selectCampersLoading,
} from "../../redux/catalog/selectors.tsx";
import { CamperCard } from '../../components/Cards';
import { FilterCard } from '../../components/Cards/FilterCard.tsx';

import transmissionIcon from '../../assets/icons/transmission.svg';
import fullIcon from '../../assets/icons/bi_grid-1x2.svg';
import acIcon from '../../assets/icons/ac.svg';
import bathroomIcon from '../../assets/icons/bathroom.svg';
import kitchenIcon from '../../assets/icons/kitchen.svg';
import tvIcon from '../../assets/icons/tv.svg';
import alcoveIcon from '../../assets/icons/bi_grid-3x3-gap.svg';
import vanIcon from '../../assets/icons/bi_grid.svg';
import { Button } from '../../components/Buttons';

const CampersList: React.FC = () => {
    const dispatch = useDispatch();
    
    const [filters, setFilters] = React.useState({
        ac: false, transmission: false, kitchen: false, tv: false, bathroom: false,
    });
    
    const catalog = useSelector(selectAllCampers);
    const isLoading = useSelector(selectCampersLoading);
    const isFetched = useSelector(selectCampersFetched);
    const error = useSelector((state: any) => state.campers.error);
    
    const handleSearch = () => {
        console.log('Search');
    };
    
    // useEffect(() => {
    //   if (!isFetched) {
    //     dispatch(getCatalog());
    //   }
    // }, [dispatch]);
    
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;
    
    useEffect(() => {
        console.log(filters)
    }, [filters]);
    
    
    return (<Container>
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <Typography variant="body2">Filters</Typography>
                <Box my={3.5}><Typography variant="h3">Vehicle equipment</Typography></Box>
                <Box my={3}><Divider/></Box>
                <Stack direction="row" spacing={1.5} alignItems="center">
                    <FilterCard icon={acIcon} checked={filters.ac} label="AC"
                                onClick={() => setFilters({...filters, ac: !filters.ac})}/>
                    <FilterCard icon={transmissionIcon} checked={filters.transmission} label="Automatic"
                                onClick={() => setFilters({...filters, transmission: !filters.transmission})}/>
                    <FilterCard icon={kitchenIcon} checked={filters.kitchen} label="Kitchen"
                                onClick={() => setFilters({...filters, kitchen: !filters.kitchen})}/>
                </Stack>
                <Stack mt={1.5} direction="row" spacing={1.5} alignItems="center">
                    <FilterCard icon={tvIcon} checked={filters.tv} label="TV"
                                onClick={() => setFilters({...filters, tv: !filters.tv})}/>
                    <FilterCard icon={bathroomIcon} checked={filters.bathroom} label="Bathroom"
                                onClick={() => setFilters({...filters, bathroom: !filters.bathroom})}/>
                </Stack>
                <Box my={3.5}><Typography variant="h3">Vehicle type</Typography></Box>
                <Box my={3}><Divider/></Box>
                <Stack direction="row" spacing={1.5} alignItems="center">
                    <FilterCard icon={vanIcon} checked={false} label="Van"/>
                    <FilterCard icon={fullIcon} checked={false} label="FullyInt"/>
                    <FilterCard icon={alcoveIcon} checked={false} label="Alcove"/>
                </Stack>
                <Box my={4}><Stack direction="row">
                    <Button variant="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </Stack>
                </Box>
            </Grid>
            <Grid item xs={8}>
                {catalog.campers.items.map((camper) => <CamperCard key={camper.id} {...camper} />)}
            </Grid>
        </Grid>
    </Container>);
};

export default CampersList;
