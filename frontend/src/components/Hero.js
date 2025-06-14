import { Box, Typography, Button, Grid } from '@mui/material';
import heroImage from '../assets/hero.jpg'
import sun from '../assets/sun.png';


export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '93vh',
        
        backgroundImage: `url(${heroImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        color: '#fff',
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          height: '100%',
          py: { xs: 4, md: 10 },
          px: { xs: 3, md: 10 },
          maxWidth: { md: '60%' },
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '5rem' }, mb: 2 }}
        >
          Discover Your Next <br /> Adventure
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1rem', md: '1.75rem' },
            mb: 4,
          }}
        >
          Choose from our curated experiences, customized for every <br /> kind of traveler.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFD700', 
            color: '#000',
            fontWeight: 'bold',
            borderRadius: 999,
            px: 10,
            py: 1.5,
            textTransform: 'none',
            fontSize: '1.5rem',
            boxShadow: 3,
            '&:hover': {
              backgroundColor: '#FFC400',
            },
          }}
        >
          BOOK NOW
        </Button>
      </Box>

      {/* Bottom footer text */}
<Box
  sx={{
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    py: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  }}
>
  {['Easy Booking', 'Curated Destinations', 'Trusted Support'].map((text, i, arr) => (
    <Box
      key={i}
      sx={{
        px: 4,
        py:2,
        color: '#fff',
        fontWeight: 700,
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        ...(i < arr.length - 1 && {
          borderRight: '2px solid rgba(255,255,255,0.6)',
        }),
      }}
    >
      {text}
    </Box>
  ))}
</Box>
{/* Decorative Icon in Bottom Right */}
<Box
  component="img"
  src={sun}
  alt="Sunburst Icon"
  sx={{
    position: 'absolute',
    bottom: -80,
    right: 100,
    width: { xs: 80, md: 480 },
    opacity: 0.9,
    zIndex: 1,
    pointerEvents: 'none', 
  }}
/>

    </Box>
  );
}
