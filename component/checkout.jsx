import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
 import Pay from '../apihandler/pay'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://codek.tech/">
        Codek
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  let reqdata={};
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    reqdata.name=data.get('name'),
    reqdata.email=data.get('email'),
    reqdata.card=data.get('card-number'),
    reqdata.svc=data.get('SVC'),
    reqdata.amount=data.get('Amount'),
    reqdata.expdate=data.get('date'),
     
console.log(reqdata.expdate)
await Pay(reqdata).then((res)=>{
  let result=res.data;
console.log(result.url);
if(result.success==true){
  window.location=result.url
}
} 
)
.catch((error)=>{
  alert(error.response.data.message)
}
)

     
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Checkout
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                 type="email"
                  
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
 <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="Name"
              autoFocus
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="card-number"
              label="Card Number"
              name="card-number"
              autoComplete="Card-Number"
              autoFocus

            />
             <TextField
              margin="normal"
              required
              fullWidth
              
              id="SVC"
              label="SVC Number"
              name="SVC"
              autoComplete="SVC-Number"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
            
              name="Amount"
              label="Ammount"
              

              id="Amount"
              autoComplete="1200"
            />
            
 
               <TextField
      id="date"
      label="date"
          format='mm-yyyy'
      type=""
      defaultValue="05/24"
     required
     fullWidth
      name='date'
       
    />    
               
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Checkout
            </Button>
            <Grid container>
              <Grid item xs>
                 
              </Grid>
              <Grid item>
                 
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}