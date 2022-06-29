import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { Box } from '@mui/system';

export default function ImageZoom() {
  return (
   <>
    <Box>
        <InnerImageZoom 
            src = "https://m.media-amazon.com/images/I/81T4O-rEI+L._SL1500_.jpg"
            width = {400}
            zoomScale = {0.4}
            fullscreenOnMobile={true}
        />
    </Box>
    </>
  )
}
