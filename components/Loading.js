import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

 function Loading() {
  return (
    
   <Grid  sx={{
    p: 2,
    margin: 'auto',
    maxWidth: 500,
    flexGrow: 1,
   
  }}>
      <Stack spacing={1} >
    <Skeleton variant="text" />
    <Skeleton variant="recctangular" width={200} height={100} />
    <Skeleton variant="rectangular" width={400} height={300} />
  </Stack>
   </Grid>
  );
}
export default Loading;