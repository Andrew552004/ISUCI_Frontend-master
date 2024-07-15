import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useDispatch, useSelector } from 'react-redux';

export default function LoadingBar() {
    const appSelector = useSelector(state=>state.app)
  return (
    <>
    {
        appSelector.loading && 
            <Box sx={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex:10000 }}>
            <LinearProgress />
      </Box>
    }
    </>
  );
}