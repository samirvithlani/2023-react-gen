import { Button, IconButton } from '@mui/material'
import React from 'react'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import SendIcon from '@mui/icons-material/Send';


export const ButtonDemo = () => {
  return (
    <div>
        <Button>BUTTON</Button>
        <Button size = "small"variant='text'>BUTTON</Button>
        <Button variant='contained'>BUTTON</Button>
        <Button variant='outlined'>BUTTON</Button>
        <IconButton>
        <DeleteSweepIcon/>
        </IconButton>
        <Button variant='contained' color='primary' startIcon={<SendIcon/>}>BUTTON</Button>
        <Button variant='contained' color='primary' endIcon={<SendIcon/>}>BUTTON</Button>
    </div>
  )
}

