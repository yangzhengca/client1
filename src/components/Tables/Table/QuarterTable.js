import React from "react";
// import useStyles from "./styles";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Title from "../../dashboard/Title"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


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

const QuarterTable = ({ setCurrentId }) => {
  // const investment = useSelector((state) => state.investment);
  const classes = useStyles();
  // const dispatch = useDispatch();

  return (
    <div>
      <Title>Quarter Records</Title>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>INVESTMENT_ID</TableCell>
              {/* <TableCell align="right">memberId</TableCell> */}
              <TableCell align="right">AMOUNT</TableCell>
              <TableCell align="right">PAYMENT_TYPE</TableCell>
              <TableCell align="right">DEPOSIT_DATE</TableCell>
              <TableCell align="right">QUARTER_ID</TableCell>
              <TableCell align="right">TOTAL_INVESTMENT</TableCell>
              <TableCell align="right">TOTAL_SHARES</TableCell>
              {/* <TableCell align="right">image</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {investment.map((inve) => (
              <TableRow key={inve.memberId}>
                <TableCell component="th" scope="row">
                  {inve.investmentId}
                </TableCell>
                {/* <TableCell align="right">{inve.memberId}</TableCell> */}
                <TableCell align="right">{inve.amount}</TableCell>
                <TableCell align="right">{inve.type}</TableCell>
                <TableCell align="right">{inve.depositDate}</TableCell>
                <TableCell align="right">{inve.quarterId}</TableCell>
                <TableCell align="right">{inve.totalInvestment}</TableCell>
                <TableCell align="right">{inve.totalShares}</TableCell>
                {/* <TableCell align="right">
                  <img src="{inve.image}"></img>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default QuarterTable;

// const Post = ({ post, setCurrentId }) => {
//   const classes = useStyles();
// const dispatch = useDispatch();

//   return (
//     <Card className={classes.card}>
//       <CardMedia
//         className={classes.media}
//         image={
//           post.selectedFile ||
//           "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
//         }
//         title={post.title}
//       />
//       <div className={classes.overlay}>
//         <Typography variant="h6">{post.creator}</Typography>
//         <Typography variant="body2">
//           {moment(post.createdAt).fromNow()}
//         </Typography>
//       </div>
//       <div className={classes.overlay2}>
//         <Button
//           style={{ color: "white" }}
//           size="small"
//           onClick={() => setCurrentId(post._id)}
//         >
//           <MoreHorizIcon fontSize="default" />
//         </Button>
//       </div>
//       <div className={classes.details}>
//         <Typography variant="body2" color="textSecondary" component="h2">
//           {post.tags.map((tag) => `#${tag} `)}
//         </Typography>
//       </div>
//       <Typography
//         className={classes.title}
//         gutterBottom
//         variant="h5"
//         component="h2"
//       >
//         {post.title}
//       </Typography>
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {post.message}
//         </Typography>
//       </CardContent>
//       <CardActions className={classes.cardActions}>
//         <Button
//           size="small"
//           color="primary"
//           onClick={() => dispatch(likePost(post._id))}
//         >
//           <ThumbUpAltIcon fontSize="small" />&nbsp; Like &nbsp;{post.likeCount}{" "}
//         </Button>
//         <Button
//           size="small"
//           color="primary"
//           onClick={() => dispatch(deletePost(post._id))}
//         >
//           <DeleteIcon fontSize="small" /> Delete
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default Post;
