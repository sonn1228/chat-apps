import React from "react";
import {
  Modal,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

import modalStyle from "./modalStyles";

const FriendRequestsModal = ({ open, onClose, requests, onAccept }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Friend Requests
        </Typography>
        <List dense>
          {requests.length ? (
            requests.map((request) => (
              <ListItem
                key={request.id}
                sx={{ justifyContent: "space-between" }}
              >
                <ListItemText
                  primary={`${request.firstname} ${request.lastname}`}
                  secondary={request.email}
                />
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => onAccept(request.id)}
                >
                  Accept
                </Button>
              </ListItem>
            ))
          ) : (
            <Typography>No pending requests</Typography>
          )}
        </List>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ mt: 2, width: "100%" }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default FriendRequestsModal;
