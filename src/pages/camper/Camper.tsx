import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Container, Stack } from '@mui/material';

import { selectCampersLoading, selectSelectedCamper } from '../../redux/catalog/selectors.tsx';
import { getCamperById } from '../../redux/catalog/operations.tsx';

import { TruckInfo } from '../../components/TruckInfo';
import { TruckTabs } from '../../components/TruckTabs/TruckTabs.tsx';
import { AppDispatch } from '../../redux/store.tsx';

export const Camper = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {id} = useParams<{ id: string }>();
    const [isFetched, setIsFetched] = useState(false);
    
    const camper = useSelector(selectSelectedCamper);
    const isLoading = useSelector(selectCampersLoading);
    
    const fetchCamperDetails = async (id: string | undefined) => {
        try {
            await dispatch(getCamperById(id));
            setIsFetched(true);
        } catch (error) {
            console.error("Failed to fetch camper details:", error);
        }
    };
    
    useEffect(() => {
        !isFetched && fetchCamperDetails(id);
    }, [dispatch]);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    return (<Container>
        {camper &&
            <Stack direction='column' spacing={5}>
                <TruckInfo {...camper} />
                <TruckTabs {...camper} />
            </Stack>
        }
        </Container>)
}