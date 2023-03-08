import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { CourseCard } from "../components/common";
const LearnerDashboard = () => {
  return (
    <Container maxWidth={false} sx={{ marginTop: "64px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ height: "100%", p: 5 }}>
            <Typography variant="h5" gutterBottom>
              Recommended Videos
            </Typography>
            {/* Add recommended videos content here */}

            <Stack direction="row" gap={3}>
              <CourseCard
                title="React Fundamentals"
                author="John Doe"
                lessons={10}
                duration="4h 30m"
                rating={4}
                views={3600}
                price={120}
              />
              <CourseCard
                title="Advanced CSS Techniques"
                author="Jane Smith"
                lessons={15}
                duration="6h 20m"
                rating={4.5}
                price={180}
                views={3600}
              />
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ height: "100%", p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Trending Videos
            </Typography>

            {/* Add trending videos content here */}
            <Stack direction="row" gap={3}>
              <CourseCard
                title="React Fundamentals"
                author="John Doe"
                lessons={10}
                duration="4h 30m"
                rating={4}
                views={3600}
                price={120}
              />
              <CourseCard
                title="Advanced CSS Techniques"
                author="Jane Smith"
                lessons={15}
                duration="6h 20m"
                rating={4.5}
                views={3600}
                price={180}
              />
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ height: "100%", p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Watch Later
            </Typography>
            {/* Add watch later content here */}
            <Stack direction="row" gap={3}>
              <CourseCard
                title="React Fundamentals"
                author="John Doe"
                lessons={10}
                duration="4h 30m"
                rating={4}
                views={3600}
                price={120}
              />
              <CourseCard
                title="Advanced CSS Techniques"
                author="Jane Smith"
                lessons={15}
                duration="6h 20m"
                rating={4.5}
                views={3600}
                price={180}
              />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LearnerDashboard;
