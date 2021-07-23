import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import {createPost, updatePost} from '../../actions/posts'



const datas=[{
  date:'July 23, 2021',
  firstName:'John',
  lastName:'Doe',
  email:"test9@test.com",
  role:"basic",
  active:'no',
  userId:235300689,
},
{
  date:'July 22, 2021',
  firstName:'John',
  lastName:'Doe',
  email:"test9@test.com",
  role:"basic",
  active:'no',
  userId:235300690,
}
]
const Form = ({currentId,setCurrentId}) => {
 
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post=useSelector((state)=>currentId ? state.posts.find((p)=> p._id === currentId):null)

  const classes = useStyles();
  const dispatch=useDispatch()

  useEffect(()=>{
    if(post) setPostData(post)
  },[post])

  const clear = () => {
    setCurrentId(null);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };


  const handleSubmit = (e) => {
      e.preventDefault()

      if(currentId){
        dispatch(updatePost(currentId,postData))
        clear()
      }else{
        dispatch(createPost(postData))
        clear()
      }
     
  };


  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Editing a User</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="FIRST_NAME"
          fullWidth="true"
          value={datas[0].firstName}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="LAST_NAME"
          fullWidth="true"
          value={datas[0].lastName}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="EMAIL"
          fullWidth="true"
          value={datas[0].email}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="ROLE"
          fullWidth="true"
          value={datas[0].role}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="ACTIVE"
          fullWidth="true"
          value={datas[0].active}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
       
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth="true">Submit</Button>
          <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth='true'>Clear</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
