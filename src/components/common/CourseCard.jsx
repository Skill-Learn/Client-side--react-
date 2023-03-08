import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  Rating,
  Stack,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Visibility } from "@mui/icons-material";
import stringAvatar from "./StringAvatar";

const StyledCard = styled(Card)({
  maxWidth: 345,
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s ease-in-out",
  border: "none",

  "&:hover": {
    transform: "scale(1.02)",
  },
});

const StyledCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "end",
  alignItems: "right",
});

const CourseCard = ({
  title,
  author,
  lessons,
  views,
  duration,
  rating,
  price,
  courseImage = "https://source.unsplash.com/random",
}) => {
  return (
    <StyledCard variant="outlined">
      <Card>
        <CardMedia
          component="img"
          height="194"
          image={courseImage}
          alt={title}
        />
      </Card>
      <CardContent>
        <Stack direction="row" gap={2} alignItems="center">
          <Avatar {...stringAvatar(author)} variant="rounded"></Avatar>
          <Stack direction="column" alignItems="flex-start">
            <Typography variant="h6">{title}</Typography>

            <Typography variant="subtitle2" color="text.secondary">
              {lessons} lessons &nbsp; <b>| &nbsp; </b>
              {duration}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {views} learners
            </Typography>
            <Rating
              name="course-rating"
              value={rating}
              readOnly
              precision={0.5}
              aria-label={`Course rating is ${rating} out of 5`}
            />
          </Stack>
        </Stack>
      </CardContent>
      <StyledCardActions>
        <Stack direction="row" gap={1}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<Visibility />}
            aria-label="Preview course"
          >
            Preview
          </Button>
          <Tooltip
            title="Add to cart"
            placement="top-end"
            arrow
            enterDelay={1000}
            leaveDelay={1000}
          >
            <Button
              variant="contained"
              size="small"
              endIcon={<ShoppingCartIcon />}
              aria-label={`Add to cart, $${price}`}
            >
              ($ {price})
            </Button>
          </Tooltip>
        </Stack>
      </StyledCardActions>
    </StyledCard>
  );
};

export default CourseCard;
