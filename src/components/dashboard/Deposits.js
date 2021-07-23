import React from 'react';
import {Link, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const Deposits=({ setCurrentId })=> {
  // const investment=useSelector((state)=>state.investment)
  const investment=[{
    investmentId:123456,
    memberId:321654,
    amount:100000,
    type:"bank-deposit",
    depositDate:"July 19, 2021",
    image:"https://i.imgur.com/n7bTdDV.jpg",
    quarterId:235689,
    totalInvestment:300000,
    totalShares:300000
},
{
    investmentId:123457,
    memberId:321655,
    amount:900000,
    type:"e-transfer",
    depositDate:"July 20, 2021",
    image:"https://i.imgur.com/GO4Tv3F.jpg",
    quarterId:235690,
    totalInvestment:280000,
    totalShares:280000
}
]


    const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        {investment[investment.length-1].amount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      {investment[investment.length-1].depositDate}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}


export default Deposits