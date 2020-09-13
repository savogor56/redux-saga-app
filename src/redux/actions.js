import { CREATE_POST, FETCH_POST, REQUEST_POSTS, SET_ALERT, TOGGLE_IS_FETCHED } from "./types"

export const createPost = post => ({
  type: CREATE_POST,
  payload: post
})

export const fetchPosts = () => ({
  type: REQUEST_POSTS 
})
  // try {
  //   dispatch(toggleIsFetched())
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
  //   const posts = await response.json()
  //   dispatch({type: FETCH_POST, payload: posts})
  //   dispatch(toggleIsFetched())
  // } catch (error) {
  //   dispatch(setAlert('Ошибка в получении постов'))    
  //   dispatch(toggleIsFetched())
  // }

export const toggleIsFetched = () => ({
  type: TOGGLE_IS_FETCHED
})

export const setAlert = (alert) => ({
  type: SET_ALERT,
  payload: alert
})
