import Item from '../Item/Item';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



const ItemList = ({ data =[]}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data.map(products => (
          <Grid key={products.id} item xs={12} sm={6} md={3}>
            <Item info={products} descri={products.description} />
        </Grid>
        ))}
      </Grid>
    </Box>
  );
   }
   export default ItemList;