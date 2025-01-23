import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({ selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();

  return (
    <Card elevation={6}>
      {/* إزالة أي تفاصيل مكان مرتبطة بالـ API */}
      <CardMedia
        style={{ height: 350 }}
        image='https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg' // صورة افتراضية
        title='Default restaurant image'
      />

      <CardContent>
        <Typography gutterBottom variant="h5">Place Name</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={3} readOnly /> {/* قيمة ثابتة */}
          <Typography component="legend">10 reviews</Typography> {/* قيمة ثابتة */}
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">$$</Typography> {/* قيمة ثابتة */}
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">Top 10</Typography> {/* قيمة ثابتة */}
        </Box>
        {/* إزالة الجوائز والمأكولات */}
        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
          <LocationOnIcon /> Some address here
        </Typography>
        <Typography variant="body2" color="textSecondary" className={classes.spacing}>
          <PhoneIcon /> (123) 456-7890
        </Typography>
      </CardContent>
      <CardActions>
        {/* إزالة الروابط إلى مواقع الـ API */}
        <Button size="small" color="primary" onClick={() => window.open('https://example.com', '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open('https://example.com', '_blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
