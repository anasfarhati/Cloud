import React from 'react';
import { Container, Typography } from '@mui/material';
import GoogleMap from './GoogleMap';

function LandingPage() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Map Page!
      </Typography>
      <div style={{ marginTop: '20px' }}>
        <GoogleMap />
      </div>
    </Container>
  );
}

export default LandingPage;