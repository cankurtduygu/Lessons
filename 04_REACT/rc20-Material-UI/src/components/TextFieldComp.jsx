import React from 'react'
import { Container, Box, TextField, Typography } from '@mui/material';
import { useState } from 'react';


const TextFieldComp = () => {

  const [first, setfirst] = useState(second)

  
  const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

  return (
    <Container sx={{marginTop:4}}>
    <Typography>
      TEXT-FIELD-(INPUT)
    </Typography>
    <Box>
       <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          slotProps={{
            select: {
              native: true,
            },
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
    </Box>
    </Container>
  )
}

export default TextFieldComp