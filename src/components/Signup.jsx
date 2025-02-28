// src/components/Signup.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../util/firebase";
import { Container, Typography, TextField, Button, Card, CardContent, FormControl, InputLabel, Select, MenuItem, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import "./Common.css";
import RedirectButton from "./RedirectComponent";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Register the user with Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);

      // Store user role in localStorage or backend if needed
      localStorage.setItem("userRole", role);

      // Set success message and open Snackbar
      setSnackbarMessage("Signup successful! You can now log in.");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      // Redirect to login page after successful signup
      navigate("/login");
    } catch (error) {
      // Set error message and open Snackbar
      setSnackbarMessage(`Signup failed: ${error.message}`);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
        backgroundColor: 'rgba(255, 255, 255, 0.15)', 
        borderRadius: '15px', 
        padding: '30px', 
        width: '400px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' ,
        marginBottom:'150px'
      }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit} className="signup-form">
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
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
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            />
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel style={{ color: 'white' }}>Role</InputLabel>
              <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
                style={{ color: 'white' }}
                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
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
              Sign Up
            </Button>
          </form>
          <Typography align="center" style={{ marginTop: '20px' }}>
            <a href="/login" style={{ color: '#FFD700' }}>Already have an account? Login</a>
          </Typography>
        </CardContent>
      </Card>

      {/* Snackbar for notifications */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Container>
    </>
  );
};

export default Signup;
