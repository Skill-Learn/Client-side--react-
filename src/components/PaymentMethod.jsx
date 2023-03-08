import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const PaymentMethods = () => {
  return (
    <Box sx={{ padding: "24px" }}>
      <Typography variant="h5" sx={{ marginBottom: "16px" }}>
        Payment Method
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ marginBottom: "16px" }}>
            Credit Card
          </Typography>
          <Box sx={{ border: "1px solid #ccc", padding: "16px" }}>
            <Typography variant="subtitle1" sx={{ marginBottom: "8px" }}>
              Card Details
            </Typography>
            <TextField
              label="Card Number"
              fullWidth
              sx={{ marginBottom: "8px" }}
              // TODO: Add input props and validation
            />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Expiry Date"
                  fullWidth
                  sx={{ marginBottom: "8px" }}
                  // TODO: Add input props and validation
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="CVV"
                  fullWidth
                  sx={{ marginBottom: "8px" }}
                  // TODO: Add input props and validation
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            PayPal
          </Typography>
          <Box sx={{ border: "1px solid #ccc", padding: "16px" }}>
            <Typography variant="subtitle1" sx={{ marginBottom: "8px" }}>
              Login to PayPal to link your account.
            </Typography>
            <Button variant="contained" color="primary">
              Link PayPal
            </Button>
          </Box>
          <Typography variant="h6" sx={{ marginBottom: 1, marginTop: 2 }}>
            Stripe
          </Typography>
          <Box sx={{ border: "1px solid #ccc", padding: "16px" }}>
            <Typography variant="subtitle1" sx={{ marginBottom: "8px" }}>
              Login to Stripe to link your account.
            </Typography>
            <Button variant="contained" color="primary">
              Link Stripe
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentMethods;
