import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TourIcon from '@mui/icons-material/Tour';
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { createTheme, Link, MenuItem, Select, ThemeProvider } from "@mui/material";
import DialogBox from "../DialogBox/DialogBox";

// media query for font size
const theme = createTheme();
theme.typography.h3 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.3rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '1rem',
  },
};

export default function Header() {
  // hooks for get header category data
  const [ headerCategory, setHeaderCategory ] = useState('');
  
  // list of header category API
  const url = "http://localhost:3001/api/header_category?limit=1000";
  
  // fetch data using axios
  useEffect(() => {
    axios.get(url).then((response) => {
      setHeaderCategory(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  // if data is not available return null
  if(!headerCategory) return null;
  
  // const handleChange = (e) => setHeaderCategory(e.target.value);
  // const handleChange = (e) => {
  //     setHeaderCategory(e.target.value);
  //     console.log(e.target.value);
  // }
  // console.log("state: " + headerCategory);

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }} height="60px" style={{ cursor: "pointer" }} >
      <AppBar
        position="static" // position="fixed"
        style={{ backgroundColor: "#131922", color: "white" }}
      >
        <Toolbar>
          <Typography variant="h3" sx={{ width: {xl: "125px", lg: "100px", md: "100px", sm: "40px"} }}>
            <Link href="/" sx={{ textDecoration: "none", color: "#fff" }}>
              AMAZON.in
            </Link>
          </Typography>

          <LocationOnIcon />
          <Typography variant="h3" sx={{ width: {xl: "180px", lg: "120px", md: "100px", sm: "60px"} }}>
              Hello <br></br> 
              <b>Select Your Address</b>
            {/* <DialogBox /> */}
          </Typography>

          <Paper
            component="form"
            sx={{
              p: "0px 4px",
              display: "flex",
              alignItems: "center",
              width: {xl: "1150px", lg: "800px", md: "500px", sm: "400px", xs: "150px"},
              height: "40px",
            }}
          >
            <IconButton sx={{ width: {xl: "80px", lg: "70px", md: "40px", sm: "30px", xs: "30px"} }} aria-label="menu">
              {/* <Typography> All </Typography> */}
              <Select
                variant="standard"
                id="selectCategory"
                label="headerCategory"
                // value={headerCategory}
                // onChange={(e) => setHeaderCategory(e.target.value)}
                // onChange={handleChange}
              >
                {
                  headerCategory.data.items.map ( headerCategoryData => {
                    return(
                      <MenuItem value={headerCategoryData.title} key={headerCategoryData.id} >
                        {headerCategoryData.title}
                      </MenuItem>
                    )
                  })
                }
              </Select>

            </IconButton>
            <Divider sx={{ height: 35, m: 0.5 }} orientation="vertical" />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton type="submit" sx={{ width: {xl: "80px", lg: "70px", md: "40px", sm: "30px", xs: "20px"} }} aria-label="search">
              <SearchIcon 
                sx={{
                  backgroundColor: "orange", 
                  width: {xl: "88px", lg: "78px", md: "48px", sm: "38px", xs: "28px"}, 
                  height: "40px" 
                }}
              />
            </IconButton>
          </Paper>

          <Typography variant="h3" sx={{ pl: "20px" }} >
            <TourIcon />
            <ArrowDropDownIcon />
          </Typography>

          <Typography variant="h3" sx={{ p: "10px" }}>
            <Link href="/login" sx={{ textDecoration: "none", color: "#fff" }}>
              Hello, Sign in <br></br> 
              <b>Account & Lists</b>
            </Link>
          </Typography>

          <Typography variant="h3" sx={{ p: "10px" }} >
            Returns <br></br> 
            <b> & Order </b>
          </Typography>

          <ShoppingCartIcon />
          <Typography variant="h3" sx={{ p: "10px" }} >
            <Link href="/cart" sx={{ textDecoration: "none", color: "#fff" }}>
              Cart
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
