import { Box, Typography, Card, CardMedia,Skeleton, CardContent ,IconButton } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { getDestinations } from '../services/api';


export default function DestinationsSection() {
  const { data, isLoading } = useQuery({
    queryKey: ['destinations'],
    queryFn: getDestinations,
  });

  return (
    <Box
        sx={{
            width: '100%',
            maxWidth: '1500px',
            height: '145vh',
            mx: 'auto',
            px: { xs: 2, md: 4 },
            py: 10,
            position: 'relative',
            overflow: 'hidden',
        }}
        >



      {/* Section Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          textAlign: 'center',
          color: '#007777',
          mb: 1,
          zIndex: 2,
        }}
      >
        Explore Most Popular Destinations
      </Typography>

      <Typography
        variant="body1"
        sx={{ textAlign: 'center', color: 'text.secondary', mb: 6 }}
      >
        Plan your perfect trip with our most loved and best-selling tour packages.
      </Typography>

      {/* Cards Container */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
           justifyContent: 'center',
          gap: 4,
        }}
      >
       {isLoading
  ? Array.from(new Array(3)).map((_, index) => (
      <Card
        key={index}
        sx={{
          width: '30%',
          height: 480,
          borderRadius: 8,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden',
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={345} />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2.5,
            py: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Skeleton width="80%" height={30} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Skeleton width="100%" height={30} />
          </Box>
        </CardContent>
      </Card>
    )):
          data.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: '30%', 
                height:480,
                borderRadius: 8,
                boxShadow:  '0px 4px 4px rgba(0, 0, 0, 0.4)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{
                  height: 345, 
                  marginBottom: 2,
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius:6,
                }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  px: 2.5,
                  py: 2,

                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: '#007777',
                    fontSize: '1.25rem',
                  }}
                >
                  {item.name.toUpperCase()}
                </Typography>
                 <Typography
                  sx={{
                    fontWeight: 500,
                    display: 'flex',
                    gap: 2,
                    fontSize: '1.25rem',
                  }}
                >
                starting from 
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: '#0096C7',
                    fontSize: '1.25rem',
                  }}
                >
                  {item.price}
                </Typography>
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Box>

      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 8, 
        position: 'absolute',
        right:0, 
        margin:10,
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
