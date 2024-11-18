import React, { useState } from "react";
import {
  TextField, Button, Grid, Container, Typography, MenuItem, FormControl,
  InputLabel, Select, Radio, RadioGroup, FormControlLabel, FormLabel, Paper,
  Box
} from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)({

});

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });
  
  const [errorMessage, setErrorMessage] = useState("");

  const courses = ["Biology", "Computer Science", "Commerce", "Humanities"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.mobile)) {
      setErrorMessage("Mobile number must be 10 digits.");
      return;
    }

    setErrorMessage("");

    const message = `✔️Submitted Successfully!!!
    
    Name: ${formData.name}
    Address: ${formData.address}
    Mobile: ${formData.mobile}
    Email: ${formData.email}
    Gender: ${formData.gender}
    Date of Birth: ${formData.dob}
    Course: ${formData.course}
  `;

  alert(message);

  };

  const handleCancel = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });
  };

  return (
    <Box sx={{ 
      height: "100vh",
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundSize: "cover"
    }}>
      <StyledContainer maxWidth="sm" className=" form-container">
        <Paper elevation={3} style={{ padding: "20px"}}>

          <Typography variant="h5" align="center" style={{color:"#185a9d"}} gutterBottom>
            SCHOOL ADMISSION FORM
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  error={!!errorMessage}
                  helperText={errorMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Course</InputLabel>
                  <Select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    {courses.map((course) => (
                      <MenuItem key={course} value={course}>
                        {course}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  type="submit"
                  className="submit-button"
                >
                  Register
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="success"
                  onClick={handleCancel}
                  className="cancel-button"
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </StyledContainer>
    </Box>
  );
};

export default Registration;
