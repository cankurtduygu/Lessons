import * as React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";
import { faker } from "@faker-js/faker";

// Mock data for messages and posts
const mockMessages = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  name: faker.person.firstName(),
  message: faker.lorem.sentence(3),
  time: `${faker.number.int({ min: 1, max: 59 })}m ago`,
}));

export default function RecentMessages() {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Recent Messages
      </Typography>
      <List dense disablePadding>
        {mockMessages.map((msg) => (
          <React.Fragment key={msg.id}>
            <ListItem alignItems="flex-start" sx={{ px: 0 }}>
              <ListItemAvatar>
                <Avatar
                  src={faker.image.avatar()}
                  sx={{ width: 32, height: 32 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    component="span"
                    fontWeight="bold"
                  >
                    {msg.name}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {msg.message}
                    </Typography>
                    {" — " + msg.time}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
