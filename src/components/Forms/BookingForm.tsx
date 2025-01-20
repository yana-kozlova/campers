import { useState } from 'react';
import toast from 'react-hot-toast';

import { Input, Paper, Stack, styled, Typography } from '@mui/material';

import { Button } from '../Buttons';

import { eColors } from '../../utils/eColors.ts';

const FormCard = styled(Paper)({
  border: `1px solid ${eColors.GRAY_LIGHT}`,
  borderRadius: '20px',
  padding: '48px',
  minHeight: '600px',
  '@media (max-width: 600px)': {
    padding: '20px',
  },
});

export const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState<{ [key: string]: string }>({});

  // TODO add calendar picker
  const handleSubmit = () => {
    const formErrors: { [key: string]: string } = {};

    if (!name) {
      toast.error('Name is required');
      formErrors.name = 'Name is required';
    }

    if (!email) {
      toast.error('Email is required');
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Email is invalid');
      formErrors.email = 'Email is invalid';
    }

    if (!bookingDate) {
      toast.error('Booking date is required');
      formErrors.bookingDate = 'Booking date is required';
    }

    setError(formErrors);

    if (Object.keys(formErrors).length === 0) {
      toast.success('Form submitted successfully');
    }
  };

  return (
    <FormCard elevation={0}>
      <Stack direction="column" spacing={3} alignItems="center">
        <Stack
          direction="column"
          spacing={2}
          alignItems="flex-start"
          sx={{ width: '100%' }}
        >
          <Typography variant="h3">Book your campervan now</Typography>
          <Typography variant="body1">
            Stay connected! We are always ready to help you.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name*"
            id="input-name"
            disableUnderline
            fullWidth
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            id="input-email"
            disableUnderline
            fullWidth
            error={Boolean(error.email)}
          />
          <Input
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            placeholder="Booking date*"
            id="input-booking-date"
            disableUnderline
            fullWidth
            error={Boolean(error.bookingDate)}
          />

          <Input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
            id="input-comment"
            disableUnderline
            multiline
            minRows={4}
            fullWidth
            error={Boolean(error.comment)}
          />
        </Stack>
        <Stack>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </FormCard>
  );
};
