import React, { useState, useEffect, useMemo } from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // استيراد ThemeProvider و createTheme
import Header from './components/Header/Header';
import List from './components/List/List';

const theme = createTheme(); // إنشاء الثيم الافتراضي

const App = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [places, setPlaces] = useState([
    { name: 'Place 1', rating: 4.5 },
    { name: 'Place 2', rating: 3.0 },
    { name: 'Place 3', rating: 5.0 },
  ]); // بيانات تجريبية
  const [isLoading, setIsLoading] = useState(false);

  const filteredPlaces = useMemo(() => {
    return rating ? places.filter((place) => Number(place.rating) > rating) : places;
  }, [places, rating]);

  return (
    <ThemeProvider theme={theme}> {/* إضافة ThemeProvider */}
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            places={filteredPlaces}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
