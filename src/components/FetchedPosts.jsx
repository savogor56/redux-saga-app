  import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import Loader from './common/Loader'
import Post from './Post'
  
  const FetchedPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postsReducer.fetchedPosts)
    const isFetched = useSelector(state => state.appReducer.isFetched)
    
    const onClickHanler = () => {
      dispatch(fetchPosts(5))
    }

    if (isFetched) {
      return <Loader />
    }

    if (!posts.length) {
      return <button onClick={onClickHanler} className="btn btn-primary">Загрузить</button>
    }
    return posts.map(post => <Post post={post} key={post.id} />)
  }
  
  export default FetchedPosts
  