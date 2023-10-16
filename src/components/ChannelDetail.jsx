import React, { useState, useEffect} from 'react'
import { useParams} from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchFromAPI } from '../utils/FetchFromAPI';
import {ChannelCard, Videos} from './'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setvideos] = useState([])
  const { id } =useParams()

  useEffect(()=>{
   fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));

   fetchFromAPI(`search?channelId=${id}&part=snippet
   &order=date`).then((data) => setvideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
      <div style={{  
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(22,204,178,1) 35%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height: '250px'
       }}
      />
         <ChannelCard channelDetail = { channelDetail } marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos} />
      </Box>

    </Box>
  )
}

export default ChannelDetail

