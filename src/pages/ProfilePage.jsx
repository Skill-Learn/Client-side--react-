import React, { useState } from "react";
import { Paper, Tabs, Tab } from "@mui/material";
import {
  AccountActions,
  EditProfile,
  Notifications,
  PaymentMethods,
} from "../components";

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState("edit_profile");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs
        value={selectedTab}
        variant="fullWidth"
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab label="Edit Profile" value="edit_profile" />
        <Tab label="Payment Method" value="payment_method" />
        <Tab label="Notifications" value="notifications" />
        <Tab label="Account Actions" value="account_actions" />
      </Tabs>
      <Paper sx={{ p: 3 }}>
        {selectedTab === "edit_profile" && <EditProfile />}
        {selectedTab === "payment_method" && <PaymentMethods />}
        {selectedTab === "notifications" && <Notifications />}
        {selectedTab === "account_actions" && <AccountActions />}
      </Paper>
    </div>
  );
};

export default UserProfile;
