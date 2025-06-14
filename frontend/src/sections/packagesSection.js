import { Box, Typography, Card, CardMedia,Skeleton, CardContent , Button } from '@mui/material';

import { useQuery } from '@tanstack/react-query';
import { getTopSellingPackages } from '../services/api';

export default function DestinationsSection() {
  const { data, isLoading } = useQuery({
    queryKey: ['topSellingPackages'],
    queryFn: getTopSellingPackages,
  });

  console.log("Top Selling Packages Data:", data);
  return (
    <Box
        sx={{
            width: '100%',
            maxWidth: '1500px',
            height: '130vh',
            mx: 'auto',
            marginBottom:10, 
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
 
        }}
      >
        Top Selling Tour Packages of India
      </Typography>

      <Typography
        variant="body1"
        sx={{ textAlign: 'center', color: 'text.secondary', mb: 6 }}
      >
        Stay updated with our latest news and happenings through Informe.
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
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius:6,
                }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
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
                    margin:1.5,
                  }}
                >
                  {item.title.toUpperCase()}
                </Typography>
               
                 <Button
      variant="contained"
      sx={{
        backgroundColor: '#4dc5c5', 
        borderRadius: '30px',
        fontWeight: 'bold',
        width: '100%',
        paddingX: 5,
        paddingY: 1.2,
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        '&:hover': {
          backgroundColor: '#3db0b0',
        },
      }}
    >
      View Details
    </Button>
              </CardContent>
            </Card>
          ))}
      </Box>

  

    </Box>
  );
}
