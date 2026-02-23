import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
const TypoButtons = () => {
  return (
    <div>
      {/* maxWidth="md" width en fazla md büyüklükte olsun.  gutterBottom={true}
      alttan margin. component attribute ü  sadece console da etkilidir , görüntü yine variant neyse odur*/}
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h3"
          gutterBottom
          color="error"
          align="center"
          sx={{ background: "#eee", mt: 4, border: "1px solid red" }}
        >
          Typography Container Box Button
        </Typography>

        {/* body1: p etiketidir,body1=16px daha büyük fs ,body2=14px daha küçük font lu.  button=span etiketidir+büyük harf */}

        <Typography variant="button">span Lorem, ipsum.</Typography>
        <Typography variant="body1">
          büyük fontlu p etiketi Lorem, ipsum.
        </Typography>
        <Typography variant="body2">
          {" "}
          küçük fontlu p etiketi Lorem, ipsum.
        </Typography>
      </Container>

      <Box
        sx={{ display: "flex", flexDirection: "column", marginTop: 4, gap: 2 }}
      >
        <Button
          variant="contained"
          color="success"
          startIcon={<DeleteIcon />}
          // sx={{ color: "blue", background: "yellow" }}
        >
          Success
        </Button>
        <Button
          variant="outlined"
          color="error"
          endIcon={<SendIcon />}
          sx={{ color: "blue", background: "yellow" }}
        >
          Error
        </Button>
      </Box>
    </div>
  );
};

export default TypoButtons;
