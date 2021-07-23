import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE ,FETCH_INVESTMENT} from './actionTypes'
//Action Creators
// export const getPosts = () => async (dispatch) => {
//     try {
//       const { data } = await api.fetchPosts();
  
//       dispatch({ type: FETCH_ALL, payload: data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
  export const getInvestment = () => async (dispatch) => {
    try {
      const { data } = await api.fetchInvestment();
      console.log(data)
  
      dispatch({ type: FETCH_INVESTMENT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  // Use fetch instead of axios
  // export const getPosts = () =>  (dispatch) => {
  //   fetch('http://localhost:5000/posts')
  //   .then(res=> res.json())
  //   .then(data =>dispatch({ type: FETCH_ALL, payload: data }))    
  // };


export const createPost=(post)=> async (dispatch)=>{
    try {
        const {data}=await api.createPost(post)
        dispatch({type:CREATE,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};