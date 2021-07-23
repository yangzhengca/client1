import React, { useState, useEffect }from 'react'
import { Container, Grow, Grid } from '@material-ui/core'

import { useDispatch } from "react-redux";
import { getPosts,getInvestment } from "../../actions/posts";
import home1 from '../../images/home1.jpg'



const Home = () => {
    const [currentId, setCurrentId] = useState(null);

    
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getInvestment());
    }, [currentId, dispatch]);

    return (
        <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={8}>
            <img
          style={{ width:1100 }}
          src={home1}
          alt="home1"
          // height="60"
        />
            </Grid>


            {/* <Grid item xs={12} sm={9}>
              <InvestTable setCurrentId={setCurrentId} />
            </Grid> */}
            {/* <Grid item xs={12} sm={12}>
            <img
          
          src={logo}
          alt="memories"
          height="60"
        />
            </Grid> */}
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home
