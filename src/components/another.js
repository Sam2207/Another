import * as React from "react";
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import test from "./images/test.png";
import img2 from "./images/An_badge.png";
import img3 from "./images/Py_badge.png";
import sv from "./images/angular1.svg";
import CloseIcon from "@mui/icons-material/Close";
import py from './images/python1.svg';
import Image from 'mui-image';
import { Box } from "@mui/system";
import { NoBackpackSharp } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

const Another = () => {
    return (
        <div>
            <Box>
            <Grid container  width="100%" height="80%" marginLeft={"55%"} border={1} borderColor='#ced9d1' >
                {/* <Grid container width="50%" height="100%" backgroundColor="white" ml="auto" mr="auto" alignContent="center">
                            </Grid>                         */}
                <Grid item backgroundColor="white" ml="auto" mr="auto" width="100%" maxheight={"100%"}>
                    <Grid container spacing={30}>
                        {/* <Grid item xs={3}> */}
                            {/* <Typography
                                component="img"
                                alt="logo"
                                src={test}
                                display="inline"
                                mt="15%"
                                ml="8%"
                                
                                sx={{ width: "24%" }}
                            ></Typography> */}
                        {/* </Grid> */}
                                           
                        <Grid item xs={3}>
                        <Typography
                                component="img"
                                alt="logo"
                                src={test}
                                display="flex"
                                justifyContent={'flex-end'}
                                mt="15%"
                                ml="8%">

                                </Typography>
                          <Grid>  
                            <Typography
                                variant="h2"
                                fontFamily="Red Hat Display"
                                color="#00003F"
                                fontSize="1.8rem"
                                // mt="1%"
                                // marginBottom={"2%"}
                                // marginRight={"10%"}
                                marginLeft={"35%"}
                                // position="relative"
                                // left={"100%"}
                            
                                > Effie Thompson 
                             </Typography>
                            </Grid>
                            
                                <center>

                            <Grid item xs={50}>
                             <Typography align='center' ml="16%">Designer  • FullTime
                             </Typography>
                            </Grid>

                             <br/>
                             <Typography fontSize="0.8rem"  marginLeft={"20%"}  color="#808080">
                             +91 8987778766 | DOB: 12-Dec-1990 | effie@gmail.com
                             </Typography>
                            </center>
                             <br/>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>

                    <Grid container width="100%" height="80%" mt={'20px'} marginLeft={"56%"} borderColor='#ced9d1'  >
                    <Grid container spacing={15}>
                        <Grid item xs="auto">
                            <Typography>Joining Date : </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>  Gujarat - 380058, India</Typography>
                        </Grid>
                    </Grid>


                    <br />

                    <br />

                    <Grid container spacing={18}>
                        <Grid item xs="auto">
                            <Typography>Education: </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>B.C.A,M.C.A</Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <Grid container spacing={19}>
                        <Grid item xs="auto">
                            <Typography>Category: </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>
                                Frontend Developer
                            </Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <br />

                    <Grid container spacing={23.5}>
                        <Grid item xs="auto">
                            <Typography>Skill: </Typography>
                        </Grid>

                        <Grid item xs={8}>
                            <Typography>CSS, HTML, WEB 2.0, Javascript, Angular, Phython</Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <Grid container spacing={15}>
                        <Grid item xs="auto">
                            <Typography>Certificate: </Typography>
                        </Grid>
                    </Grid>
                    <br/><br/>
                        {/* <Grid item xs={9}>
                <img src={sv} alt='svg image' width={'15%'}/>
                </Grid>
         <br/>       
         <Grid container spacing={15}>
            <Grid item xs="auto">
              <Typography> </Typography>
            </Grid> */}

                        {/* <Grid item xs={9}>
                <img src={sv} alt='svg image' width={'15%'}/>
                </Grid> */}

                        {/* <Grid container spacing={40}>
            <Grid item xs="auto">
              <Typography> </Typography>
            </Grid>

            <Grid item xs={8}>
              <Typography>Certified Angular Developer</Typography>
              <Typography>Certified Python Developer</Typography>

            </Grid>
          </Grid>
      */}                       <br />  <br />  <br />  <br />                       <br />  <br />  <br />  <br />                       <br />  <br />  <br />  <br />

                        <Grid container spacing={17.5}>
                        <Grid item xs="auto">
                        <Typography>Experience: </Typography>
                        </Grid>

                        <Grid item xs={8}>
                        <Typography>3 Years</Typography>
                        </Grid>
                        </Grid>
                        <br/>
                        <br/>
                        {/* <br />  <br />  <br />  <br />     <br />  <br />  <br />  <br />     <br />  <br />  <br />  <br />     <br />  <br />  <br />  <br />    */}
                        <Grid container spacing={19}>
                        <Grid item xs="auto">
                        <Typography>Worktype: </Typography>
                        </Grid>

                        <Grid item xs={8}>
                        <Typography>Full Time:</Typography>
                        </Grid>
                        </Grid>
                        {/* <br />  <br />  <br />  <br />                       <br />  <br />  <br />  <br />                       <br />  <br />  <br />  <br />                            */}
                        {/* <Divider variant="middle" color="black" /> */}
                        <Grid container  width="100%" height="90%" mt={5} marginLeft={"12"} border={1} borderColor='#ced9d1'  >
                       
                        <Typography> Personal Information </Typography>
                        
                            {/* <Divider/> */}
                        <br />  <br />  <br />  <br />
                        <Grid container spacing={20}>
                            <Grid item xs="auto">
                                {/* <Item>variable width content</Item> */}
                                <Typography> Address: </Typography>
                            </Grid>

                            <Grid item xs={3.5}>
                                <Typography>
                                    C52, Rushikesh Park, Near Vidhyasagar School, Ahemadabad,
                                    Gujarat - 380058, India
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={15}>
                            <Grid item xs="auto" mt={3}>
                                <Typography> Marital Status: </Typography>
                            </Grid>

                            <Grid item xs={6} mt={3}>
                                <Typography>Non-Maried</Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={13} >
                            <Grid item xs="auto" mt={3}>
                                <Typography > Emergency No: </Typography>
                            </Grid>

                            <Grid item xs={6} mt={3}>
                                <Typography >+91 9878567879</Typography>
                            </Grid>
                        </Grid>

                        </Grid>
                       
                        </Grid>
                        </Box>
                    </div>
                    );
};
                    export default Another;
