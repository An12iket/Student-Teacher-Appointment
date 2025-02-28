import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../util/firebase"; // Import Firebase auth
import { Container, Typography, TextField, Button, Card, CardContent, Select, MenuItem, FormControl, InputLabel } from '@mui/material'; // Import Material-UI components
import "./Common.css";
import RedirectButton from "./RedirectComponent";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Authenticate user with Firebase
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect based on role
      if (role === "student") {
        navigate("/appointments");
      } else {
        navigate("/lecturer-dashboard");
      }
    } catch (error) {
      alert(error.message); // Handle errors, e.g., invalid credentials
    }
  };

  return (
    <>
    <RedirectButton />
    <Container style={{ 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      color: "white" 
    }}>
      
      <Card style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        borderRadius: '15px', 
        padding: '20px', 
        width: '400px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' ,
        marginBottom:'150px'
      }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit} className="login-form">
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{ style: { color: 'white' } }} // Change label color
              InputProps={{ style: { color: 'white' } }} // Change input text color
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} // Input background color
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{ style: { color: 'white' } }} // Change label color
              InputProps={{ style: { color: 'white' } }} // Change input text color
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} // Input background color
            />
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel style={{ color: 'white' }}>Role</InputLabel>
              <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
                style={{ color: 'white' }}
                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} // Select background color
              >
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="lecturer">Lecturer</MenuItem>
              </Select>
            </FormControl>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth 
              style={{ marginTop: '20px' }}
            >
              Login
            </Button>
          </form>
          <Typography align="center" style={{ marginTop: '20px' }}>
            Don't have an account? <a href="/signup" style={{ color: '#FFD700' }}>Sign up</a>
          </Typography>
          <Typography align="center">
            <a href="/forgot-password" style={{ color: '#FFD700' }}>Forgot password?</a>
          </Typography>
        </CardContent>
      </Card>
    </Container>
    </>
  );
};

export default Login;
