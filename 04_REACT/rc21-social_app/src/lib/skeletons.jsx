import { Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography, Box, Skeleton } from '@mui/material'


export const loadingPosts = Array.from({ length: 3 }, (_, i) => (
    <Card sx={{ mb: 3 }} key={i}>
        <CardHeader
            avatar={<Skeleton variant="circular" width={40} height={40} />}
            title={<Skeleton variant="text" width="60%" />}
            subheader={<Skeleton variant="text" width="40%" />}
        />
        <Skeleton variant="rectangular" height={190} sx={{ mx: 2 }} />
        <CardContent>
            <Skeleton variant="text" height={60} />
        </CardContent>
        <CardActions disableSpacing>
            <Skeleton variant="rectangular" width={100} height={30} sx={{ m: 1 }} />
            <Skeleton variant="rectangular" width={100} height={30} sx={{ m: 1 }} />
        </CardActions>
    </Card>
))