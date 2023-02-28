import { Container, Grid, Paper, Typography } from "@mui/material";

const LearnerDashboard = () => {
  return (
    <Container maxWidth={false} sx={{ marginTop: "64px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ height: "100%", p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Recommended Videos
            </Typography>
            {/* Add recommended videos content here */}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ height: "100%", p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Trending Videos
            </Typography>
            {/* Add trending videos content here */}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ height: "100%", p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Watch Later
            </Typography>
            {/* Add watch later content here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LearnerDashboard;
