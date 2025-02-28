import React from "react";
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material'; // Import Material-UI components
import RedirectButton from "./RedirectComponent";
import { FaRocket, FaUsers, FaRegLightbulb } from 'react-icons/fa'; // Importing icons

const About = () => {
  return (
    <Container style={{ padding: '40px', color: 'white' }}>
      <RedirectButton />
      <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        About Us
      </Typography>
     
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '15px', 
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', 
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)',
            }
          }}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                <FaRegLightbulb size={40} color="#FFD700" /> {/* Icon for Mission */}
              </Box>
              <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Our Mission
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                To empower students and educators by providing an efficient and user-friendly platform for scheduling appointments, fostering better communication and collaboration.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={2} mb={2} textAlign="center">
        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
          Our Project
        </Typography>
        <Typography variant="h6" paragraph>
          Our project is designed to bridge the gap between students and lecturers, providing a user-friendly interface for scheduling appointments. We believe that effective communication and organization are key to a successful educational experience.
        </Typography>
        <Typography variant="h6" paragraph>
          With features that allow for easy navigation, reminders, and feedback, our platform aims to enhance the learning journey for both students and educators.
        </Typography>
        <Box display="flex" justifyContent="center" mt={4}>
          <FaRocket size={50} color="#FFD700" style={{ margin: '0 20px' }} /> {/* Icon for Project */}
          <FaUsers size={50} color="#FFD700" style={{ margin: '0 20px' }} /> {/* Icon for Team */}
        </Box>
      </Box>
    </Container>
  );
};

export default About;