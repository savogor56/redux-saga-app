import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

const Posts = ({posts}) => {
  if (!posts.length) {
    return <p>Отсутствуют посты</p>
  }
  return posts.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts
})

export default connect(mapStateToProps)(Posts)
