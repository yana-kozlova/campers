import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Box, Container, Divider, FormControl, Grid, Input, InputAdornment, Stack, Typography
} from "@mui/material";

import { getCatalog } from "../../redux/catalog/operations";
import {
    selectAllCampers, selectCampersLoading,
} from "../../redux/catalog/selectors.tsx";
import { AppDispatch } from "../../redux/store";
import { ICamper } from '../../redux/catalog/types.ts';

import { CamperCard, FilterCard } from "../../components/Cards";
import { Button } from "../../components/Buttons";
import { Loader } from '../../components/Loader';

import transmissionIcon from "../../assets/icons/transmission.svg";
import fullIcon from "../../assets/icons/bi_grid-1x2.svg";
import acIcon from "../../assets/icons/ac.svg";
import bathroomIcon from "../../assets/icons/bathroom.svg";
import kitchenIcon from "../../assets/icons/kitchen.svg";
import tvIcon from "../../assets/icons/tv.svg";
import alcoveIcon from "../../assets/icons/bi_grid-3x3-gap.svg";
import vanIcon from "../../assets/icons/bi_grid.svg";
import mapIcon from "../../assets/icons/map-big.svg";

type Filters = {
    AC?: boolean;
    kitchen?: boolean;
    TV?: boolean;
    bathroom?: boolean;
    transmission?: string;
};

const CampersList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    const [filters, setFilters] = React.useState<Filters>({});
    const [form, setForm] = React.useState('');
    const [page, setPage] = React.useState(1);
    const [search, setSearch] = React.useState('');
    const [allCampers, setAllCampers] = React.useState<ICamper[]>([]);
    
    const total = useSelector(selectAllCampers).total;
    const isLoading = useSelector(selectCampersLoading);
    
    const handleSearch = () => {
        setPage(1);
        dispatch(getCatalog({
            page: 1,
            limit: 4,
            filter: filters ? filters : {},
            ...(form ? { form: form } : {}),
            ...(search ? { location: search } : {})})).then((result: any) => {
            setAllCampers(result.payload.items);
        });
    };
    
    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        dispatch(getCatalog({page: nextPage, limit: 4, filter: filters})).then((result: any) => {
            setAllCampers((prev) => [...prev, ...result.payload.items]);
        });
    };
    
    useEffect(() => {
        dispatch(getCatalog({page: 1, limit: 4})).then((result: any) => {
            setAllCampers(result.payload.items);
        });
    }, [dispatch]);
    
    return (<Container>
        {isLoading && <Loader />}
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Box sx={{maxWidth: '360px'}}>
                        <Typography variant="body1">Location</Typography>
                        <FormControl variant="standard" sx={{width: '100%', marginBottom: 4, marginTop: 2}}>
                            <Input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search location"
                                id="input-with-icon-adornment"
                                disableUnderline
                                startAdornment={<InputAdornment position="start">
                                    <img
                                        src={mapIcon}
                                        alt="Location"
                                        width="20"
                                        height="20"
                                    />
                                </InputAdornment>}
                            />
                        </FormControl>
                        <Typography variant="body2">Filters</Typography>
                        <Box my={3.5}>
                            <Typography variant="h3">Vehicle equipment</Typography>
                        </Box>
                        <Box my={3}>
                            <Divider/>
                        </Box>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <FilterCard
                                icon={acIcon}
                                checked={Boolean(filters?.AC)}
                                label="AC"
                                onClick={() => () =>
                                    setFilters({
                                        ...filters,
                                        AC: filters.AC ? !filters.AC : true,
                                    })}
                            />
                            <FilterCard
                                icon={transmissionIcon}
                                checked={Boolean(filters?.transmission)}
                                label="Automatic"
                                onClick={() => setFilters({...filters, transmission: "automatic"})}
                            />
                            <FilterCard
                                icon={kitchenIcon}
                                checked={Boolean(filters?.kitchen)}
                                label="Kitchen"
                                onClick={() => () =>
                                    setFilters({
                                        ...filters,
                                        kitchen: filters.kitchen ? !filters.kitchen : true,
                                    })}
                            />
                        </Stack>
                        <Stack mt={1.5} direction="row" spacing={1.5} alignItems="center">
                            <FilterCard
                                icon={tvIcon}
                                checked={Boolean(filters?.TV)}
                                label="TV"
                                onClick={() => () =>
                                    setFilters({
                                        ...filters,
                                        TV: filters.TV ? !filters.TV : true,
                                    })}
                            />
                            <FilterCard
                                icon={bathroomIcon}
                                checked={Boolean(filters?.bathroom)}
                                label="Bathroom"
                                onClick={() =>() =>
                                    setFilters({
                                        ...filters,
                                        bathroom: filters.bathroom ? !filters.bathroom : true,
                                    })}
                            />
                        </Stack>
                        <Box my={3.5}>
                            <Typography variant="h3">Vehicle type</Typography>
                        </Box>
                        <Box my={3}>
                            <Divider/>
                        </Box>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <FilterCard icon={vanIcon} checked={form === 'panelTruck'} label="Van" onClick={()=> setForm('panelTruck')}/>
                            <FilterCard icon={fullIcon} checked={form=== 'fullyIntegrated'} label="FullyInt" onClick={()=> setForm('fullyIntegrated')}/>
                            <FilterCard icon={alcoveIcon} checked={form==='alcove'} label="Alcove" onClick={()=> setForm('alcove')}/>
                        </Stack>
                        <Box my={4}>
                            <Stack direction="row">
                                <Button variant="primary" onClick={handleSearch}>
                                    Search
                                </Button>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Stack direction="column" spacing={3}>
                    {allCampers.map((camper: ICamper) => (<CamperCard key={camper.id} {...camper} />))}
                    {total > allCampers.length && <Box mt={4} textAlign="center">
                      <Button variant="secondary" onClick={handleLoadMore}>
                        Load More
                      </Button>
                    </Box>}
                    </Stack>
                </Grid>
            </Grid>
        </Container>);
};

export default CampersList;
