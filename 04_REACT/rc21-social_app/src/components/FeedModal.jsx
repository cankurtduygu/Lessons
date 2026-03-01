import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Stack, TextField, Typography } from '@mui/material';
import useFeedStore from '../stores/feed-store';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function FeedModal() {
    const { addToFeed } = useFeedStore()
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        authorName: '',
        authorAvatar: '',
        content: '',
        image: '',
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Post payload:', formData);
        addToFeed({ ...formData, id: Date.now().toString(), timestamp: new Date().toLocaleDateString(), likes: 0 });
        handleClose();
    };

    return (
        <div>
            <Button variant="contained" sx={{ borderRadius: 20, minWidth: 0, width: 40, height: 40, padding: 0 }} onClick={handleOpen}>+</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                            Create a new post
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Stack spacing={2}>
                                <TextField
                                    name="authorName"
                                    label="Author Name"
                                    value={formData.authorName}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    name="authorAvatar"
                                    label="Author Avatar URL"
                                    value={formData.authorAvatar}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    name="content"
                                    label="Content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    fullWidth
                                    multiline
                                    minRows={3}
                                    required
                                />
                                <TextField
                                    name="image"
                                    label="Image URL"
                                    value={formData.image}
                                    onChange={handleChange}
                                    fullWidth
                                />

                                <Stack direction="row" spacing={1} justifyContent="flex-end">
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type="submit" variant="contained">
                                        Submit
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
