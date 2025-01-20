import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Container, Stack } from '@mui/material';

import {
  selectCampersLoading,
  selectSelectedCamper,
} from '../../redux/catalog/selectors.tsx';
import { getCamperById } from '../../redux/catalog/operations.tsx';
import { AppDispatch } from '../../redux/store.tsx';

import { CamperInfo } from '../../components/./CamperInfo';
import { CamperTabs } from '../../components/./CamperTabs';
import { Loader } from '../../components/Loader';
import toast from 'react-hot-toast';

export const Camper = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const [isFetched, setIsFetched] = useState(false);

  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectCampersLoading);

  const fetchCamperDetails = async (id: string | undefined) => {
    try {
      await dispatch(getCamperById(id));
      setIsFetched(true);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Failed to fetch camper details: ${error.message}`);
      }
      toast.error('An unknown error occurred');
    }
  };

  useEffect(() => {
    if (!isFetched) {
      fetchCamperDetails(id);
    }
  }, [dispatch]);

  return (
    <Container sx={{ '@media (max-width: 600px)': { padding: '24px' } }}>
      {isLoading && <Loader />}
      {camper && (
        <Stack direction="column" spacing={5}>
          <CamperInfo {...camper} />
          <CamperTabs {...camper} />
        </Stack>
      )}
    </Container>
  );
};
