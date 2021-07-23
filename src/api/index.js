import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// URL for deploy to heroku
// const url = 'https://surpasslabs.herokuapp.com/posts';

// URL for test front end
// const url = 'https://jsonplaceholder.typicode.com/posts'

// // URL for dev env
// const url = 'http://localhost:5001/api/investment';

// export const fetchPosts = () => axios.get('http://localhost:5001');

export const fetchInvestment = () => API.get("/api/investment");

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

export const createPost = (newPost) => API.post("/posts", newPost);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);
