import {
  Typography,
  Button,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import { AddCircleOutline, Facebook, Twitter } from "@mui/icons-material";
const AccountActions = () => {
  const handleDeleteAccount = () => {
    // handle deleting account logic
  };

  const handleLinkAccount = () => {
    // handle linking account logic
  };

  return (
    <Grid container sx={{ p: 2 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Delete Account
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Once you delete your account, there is no going back. Please be
          certain.
        </Typography>
        <Button variant="contained" color="error" onClick={handleDeleteAccount}>
          Delete Account
        </Button>
        <Divider sx={{ my: 2 }} />
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Linked Accounts
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          You can link your account to other services to enhance your
          experience.
        </Typography>

        <ListItem onClick={handleLinkAccount}>
          <ListItemIcon>
            {/* Replace with appropriate icon */}
            <AddCircleOutline />
          </ListItemIcon>
          <ListItemText primary="Link Account" />
        </ListItem>

        {/* Replace with appropriate data */}
        <ListItem>
          <ListItemIcon>
            {/* Replace with appropriate icon */}
            <Facebook />
          </ListItemIcon>
          <ListItemText primary="Facebook" secondary="Linked" />
        </ListItem>

        {/* Replace with appropriate data */}
        <ListItem>
          <ListItemIcon>
            {/* Replace with appropriate icon */}
            <Twitter />
          </ListItemIcon>
          <ListItemText primary="Twitter" secondary="Not Linked" />
        </ListItem>
      </Grid>
    </Grid>
  );
};
export default AccountActions;
