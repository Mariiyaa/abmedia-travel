import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { FaClock, FaWallet, FaNetworkWired, FaBookOpen } from 'react-icons/fa';

const advantages = [
  {
    icon: <FaClock size={60} color="#007B8F" />,
    title: 'Save Time',
    description: 'No More Switching For Packages Or Plans.',
  },
  {
    icon: <FaWallet size={60} color="#007B8F" />,
    title: 'Save Money',
    description: 'Compare, Negotiate, And Choose The Best.',
  },
  {
    icon: <FaNetworkWired size={60} color="#007B8F" />,
    title: 'Trusted Network',
    description: 'A Trusted Network Of 7000+ Travel Agents',
  },
  {
    icon: <FaBookOpen size={60} color="#007B8F" />,
    title: 'Multiple Options',
    description: 'Itineraries & Travel Tips From Trusted Agents',
  },
];

export default function AdvantagesSection() {
  return (
    <Box sx={{ backgroundColor: '#7ACCCC', py: 6, px: 2, textAlign: 'center',height:'70vh' }}>
      <Typography variant="h2" fontWeight="bold" color="white" gutterBottom>
        Our Advantages
      </Typography>
      <Typography variant="body1" fontSize={18} color="white" mb={4}>
        You can rely on our experience and the quality of services we provide.
        <br />
        Here are other reasons to book tours at Treat Holidays
      </Typography>

      <Grid container spacing={8} justifyContent="center">
        {advantages.map((adv, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: '50%',
                width: 210,
                height: 210,
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',

              }}
            >
              {adv.icon}
            </Paper>
            <Typography variant="h4" fontWeight="bold"marginBottom={4} mt={2} color="white">
              {adv.title}
            </Typography>
            <Typography variant="body2" fontSize={28} width={320} color="white" mt={1}>
              {adv.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
