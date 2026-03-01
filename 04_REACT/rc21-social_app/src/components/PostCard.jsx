import * as React from "react";
import { Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography, Box, Menu, MenuItem } from '@mui/material'
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useFeedStore from "../stores/feed-store";
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'


export default function PostCard({ post }) {
  const { delFromFeed } = useFeedStore();
  const [isLiked, setIsLiked] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleLike = () => setIsLiked(!isLiked);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id) => {
    delFromFeed(id);
    handleMenuClose();
  };

  const handleUpdate = (id) => {
    console.log("Update post:", id);
    handleMenuClose();
  };
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader
        avatar={
          <Avatar src={post.authorAvatar} sx={{ bgcolor: "primary.main" }}>
            {post.authorName.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            onClick={handleMenuOpen}
            id="post-menu-button"
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="subtitle1" fontWeight="bold">
            {post.authorName}
          </Typography>
        }
        subheader={post.timestamp}
      />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        id="post-menu"
        slotProps={{
          "aria-labelledby": "post-menu-button",
        }}
      >
        <MenuItem onClick={handleUpdate}>
          <EditIcon sx={{ mr: 1 }} />
          Update
        </MenuItem>
        <MenuItem onClick={() => handleDelete(post.id)}>
          <DeleteIcon sx={{ mr: 1 }} color="error" />
          Delete
        </MenuItem>
      </Menu>

      {/* Post Image (using Box to control aspect ratio and image fitting) */}
      <Box
        component="img"
        src={post.image}
        alt="Post visual"
        sx={{
          width: "100%",
          height: { xs: 200, sm: 350 },
          objectFit: "cover",
          display: "block",
        }}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <FavoriteIcon color={isLiked ? "error" : "inherit"} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography variant="caption" sx={{ ml: 1, color: "text.secondary" }}>
          {isLiked ? post.likes + 1 : post.likes} likes
        </Typography>
      </CardActions>
    </Card>
  );
}
