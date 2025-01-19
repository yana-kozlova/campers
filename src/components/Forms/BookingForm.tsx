import { Input, Paper, Stack, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button } from '../Buttons';
import { eColors } from '../../utils/eColors.ts';
import toast from 'react-hot-toast';

const FormCard = styled(Paper)({
    border: `1px solid ${eColors.GRAY_LIGHT}`,
    borderRadius: '20px',
    padding: '48px',
    minHeight: '600px',
});

export const BookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState<{ [key: string]: string }>({});
    
    // TODO add calendar picker
    const handleSubmit = () => {
        let formErrors: { [key: string]: string } = {};
        
        if (!name) {
            toast("Name is required", { type: "error" });
            formErrors.name = 'Name is required';
        }
        
        if (!email) {
            toast("Email is required", { type: "error" });
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            toast("Email is invalid", { type: "error" });
            formErrors.email = 'Email is invalid';
        }
        
        if (!bookingDate) {
            toast("Booking date is required", { type: "error" });
            formErrors.bookingDate = 'Booking date is required';
        }
        
        setError(formErrors);
        
        if (Object.keys(formErrors).length === 0) {
            toast("Form submitted successfully", { type: "success" });
        }
    };
    
    return (
        <FormCard elevation={0}>
            <Stack direction="column" spacing={3} alignItems="center">
                <Stack direction="column" spacing={2} alignItems="flex-start" sx={{ width: '100%' }}>
                    <Typography variant="h3">Book your campervan now</Typography>
                    <Typography variant="body1">Stay connected! We are always ready to help you.</Typography>
                </Stack>
                <Stack direction="column" spacing={2} alignItems="center" sx={{ width: '100%' }}>
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
                    <Button type="button" variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </FormCard>
    );
};
