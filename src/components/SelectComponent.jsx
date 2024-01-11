import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo(props) {
  return (
    <Box sx={{ minWidth: 200, 
              
              '& .MuiFormControl-root': 
              { flexDirection: 'row' 
                }, 
              '& .MuiFormLabel-root': 
                {position: 'relative', top:'26px', marginRight:props.margin, fontWeight:'600', color:'black', fontSize:'15px'} ,
              '& .MuiNativeSelect-select': {
                fontSize:'13px'
              }
                  }}>
    <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {props.lable}:
        </InputLabel>
        <NativeSelect
          defaultValue={props.value}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          
          <option value={10}>{props.value.a}</option>
          <option value={20}>{props.value.b ? props.value.b : 'Option 2'}</option>
          <option value={30}>{props.value.c ? props.value.c : 'Option 3'}</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}