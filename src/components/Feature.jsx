import React from "react";
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import RedirectButton from "./RedirectComponent";

const featuresData = [
  {
    title: "Easy Appointment Booking",
    description: "Book appointments easily with just a few clicks.",
  },
  {
    title: "View Upcoming Appointments",
    description: "Stay updated with your upcoming appointments at a glance.",
  },
  {
    title: "Direct Messaging",
    description: "Communicate directly with your lecturer or student.",
  },
];

const Feature = () => {
  return (
    <Container style={{ 
      padding: '2rem', 
      color: 'white', 
      minHeight: '100vh'
    }}>
      <RedirectButton />
      <Typography variant="h2" align="center" gutterBottom>
        Our Features
      </Typography>
      <Grid container spacing={4}>
        {featuresData.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '15px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';
            }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" paragraph color="#EEE3AB">
                  {feature.description}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Feature;  