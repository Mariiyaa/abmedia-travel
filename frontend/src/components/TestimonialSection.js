import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';

const testimonials = [
  {
    name: 'Name',
    designation: 'Company / Designation',
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    name: 'Name',
    designation: 'Company / Designation',
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'Name',
    designation: 'Company / Designation',
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 2,marginInline:20,backgroundColor: '#fff' ,}} >
      <Typography variant="h3" fontWeight="bold" gutterBottom marginBottom={6}>
        Testimonials
      </Typography>

      <Grid spacing={4} height='30vh' display='flex'>
        {testimonials.map((t, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              elevation={2}
              sx={{
                pt: 6,
                px: 3,
                margin:2,
                pb: 4,
                position: 'relative',
                backgroundColor: '#f6f6f6',
                borderRadius: 2,
                height: '100%',
                overflow: 'visible',
              }}
            >
              <Avatar
                src={t.avatar}
                sx={{
                  width: 80,
                  height: 80,
                  position: 'absolute',
                  top: -35,
                  left: '10%',
                  transform: 'translateX(-50%)',
                  border: '3px solid white',
                  backgroundColor: 'white',

                }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={18}
                  sx={{ mb: 2 }}
                >
                  {t.text}
                </Typography>
                <Typography fontWeight="bold" fontSize={18}>{t.name}</Typography>
                <Typography variant="body2" fontSize={18} color="text.secondary">
                  {t.designation}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        
      </Grid>
            <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 8, 
        position: 'absolute',
        right:40, 
        margin:20,
        padding: 2,
      }}
    >
      {/* Left Arrow Icon */}
      <IconButton
        aria-label="previous"
        sx={{
        width: 60,
        height:60,
        backgroundColor: "#FFC107",
          borderRadius: '50%',
          padding: '8px', 
          color:'#ffffff'
          
        }}
      >
        <FaArrowLeft size={30} /> 
      </IconButton>

      {/* Right Arrow Icon */}
      <IconButton
        aria-label="next"
        sx={{
         width: 60,
        height:60,
        backgroundColor: "#FFC107",
          borderRadius: '50%',
          padding: '8px', 
          color:'#ffffff'
       
        }}
      >
        <FaArrowRight size={30} />
      </IconButton>
    </Box>
    </Box>
  );
}
