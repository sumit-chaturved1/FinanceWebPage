import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const PrettoSlider = styled(Slider)({
  color: '#6e69f6',
  height: 4,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    boxShadow: '0px 0px 1.5px 1.5px rgba(59, 59, 59, 0.2)',
    
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 23,
    height: 23,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#6e69f6',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});



export default function CustomizedSlider(props) {
  const [value, setValue] = React.useState(props.defaultValue)
  return (
    <Box sx={{ width: 180, display: 'flex'  }}>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
      <p style={{fontSize: '15px',fontWeight: '500', marginTop:'2px', marginLeft:'15px'}} >{value}%</p>
    </Box>
  );
}