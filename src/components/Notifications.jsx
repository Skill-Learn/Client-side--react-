import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const notifications = [
  {
    id: 1,
    type: "notification",
    title: "New Course Available",
    description: "Learn React in 30 days!",
    date: "2022-01-01",
  },
  {
    id: 2,
    type: "notification",
    title: "Reminder: Assignment Due",
    description: "Submit your assignment by end of day today.",
    date: "2022-01-02",
  },
  {
    id: 3,
    type: "mail",
    title: "Welcome to Skill Learn!",
    description: "Thank you for signing up for our platform.",
    date: "2022-01-03",
  },
  {
    id: 4,
    type: "transaction",
    title: "Payment Received",
    description: "$100.00 from John Doe",
    date: "2022-01-04",
  },
];

const Notifications = () => {
  return (
    <div>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Notifications
      </Typography>
      <List>
        {notifications.map((notification) => (
          <div key={notification.id}>
            <ListItem disablePadding>
              <ListItemText
                primary={notification.title}
                secondary={notification.description}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default Notifications;
