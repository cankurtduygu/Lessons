import PostCard from "../components/PostCard";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import RightSidebar from "../components/RightSidebar";
import useFeedStore from "../stores/feed-store";
import { useEffect, useState } from "react";
import { loadingPosts } from "../lib/skeletons";
import FeedModal from "../components/FeedModal";

export default function Feed() {
  const { feed, isFeedLoading } = useFeedStore();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 8 }}>
          {loading ? (
            loadingPosts
          ) : (
            <>
              {isFeedLoading && (
                <Typography variant="h6" align="center" sx={{ my: 2 }}>
                  New post loading...
                </Typography>
              )}
              {feed.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </>
          )}
        </Grid>
        <Grid size={{ lg: 4 }}>
          <RightSidebar />
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "fixed",
          left: theme.spacing(3),
          bottom: theme.spacing(3),
        }}
      >
        <FeedModal />
      </Box>
    </>
  );
}
