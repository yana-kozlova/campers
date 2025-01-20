import React from 'react';
import {
  Avatar,
  Paper,
  Rating,
  Stack,
  styled,
  Typography,
} from '@mui/material';

import { ICamper } from '../../redux/catalog/types.ts';

import starIcon from '../../assets/icons/star.svg';
import starYellowIcon from '../../assets/icons/star-yellow.svg';

import { eColors } from '../../utils/eColors.ts';

const ReviewCard = styled(Paper)({
  padding: 0,
  backgroundColor: eColors.WHITE,
  minHeight: '600px',
});

const ReviewerAvatar = styled(Avatar)({
  backgroundColor: eColors.SILVER,
  width: 60,
  height: 60,
  color: eColors.PRIMARY,
  fontSize: '24px',
  fontWeight: 600,
});

export const CamperReviewCard: React.FC<ICamper> = (props) => {
  const { id, reviews } = props;

  return (
    <ReviewCard key={id} elevation={0}>
      <Stack direction="column" spacing={5}>
        {reviews.map((review, index) => (
          <Stack
            key={index}
            direction="column"
            sx={{ width: '100%' }}
            spacing={3}
          >
            <Stack direction="row" spacing={2}>
              <ReviewerAvatar>{review.reviewer_name[0]}</ReviewerAvatar>
              <Stack direction="column" justifyContent="center" spacing={1}>
                <Typography variant="body2">{review.reviewer_name}</Typography>
                <Rating
                  name="rating"
                  value={review.reviewer_rating}
                  readOnly
                  icon={
                    <img
                      src={starYellowIcon}
                      alt="Rating"
                      width="16"
                      height="16"
                    />
                  }
                  emptyIcon={
                    <img src={starIcon} alt="Rating" width="16" height="16" />
                  }
                />
              </Stack>
            </Stack>
            <Typography variant="h5" color="secondary">
              {review.comment}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </ReviewCard>
  );
};
