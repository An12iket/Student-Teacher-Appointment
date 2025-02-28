import React from "react";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import RedirectButton from "./RedirectComponent";

const Contact = () => {
  return (
    <div style={{ height:"min-height:100vh", color:"white", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} className="contact-container">
      <RedirectButton/>
      <h2 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Contact Us</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', padding: '20px', flexWrap: 'wrap' }}>
        <a href="https://aksharkacha.netlify.app/" style={{ textDecoration: 'none', width: '100%', maxWidth: '345px', margin: '10px' }} target="_blank" rel="noopener noreferrer">
          <Card style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '15px', 
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', 
            border: '5px solid transparent', 
            backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #012b45, #48628f)', 
            backgroundClip: 'padding-box, border-box',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }} 
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
          }}
          >
            <CardMedia
              component="img"
              height="300"
              image="public\assets\ak.jpg"
              alt="CEO Photo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                Akshar Kacha
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
              Aspiring Mobile App Developer | Learning React Native 🚀 Passionate about solving real-world problems through technology 🌟
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a href="https://an12iket-portfolio.netlify.app/" style={{ textDecoration: 'none', width: '100%', maxWidth: '345px', margin: '10px' }} target="_blank" rel="noopener noreferrer">
          <Card style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '15px', 
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', 
            border: '5px solid transparent', 
            backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #012b45, #48628f)', 
            backgroundClip: 'padding-box, border-box',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }} 
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
          }}
          >
            <CardMedia
              component="img"
              height="300"
              image="public\assets\aniket.jpg"
              alt="Another Photo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                Aniket Chavan
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
              MERN Stack Developer proficient in building scalable RESTful APIs, and optimized full-stack solutions.
              </Typography>
            </CardContent>
          </Card>
        </a>
      </div>
    </div>
  );
};

export default Contact;
