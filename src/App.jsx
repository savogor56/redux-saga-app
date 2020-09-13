import React from 'react'
import styles from './App.module.css'
import Alert from './components/common/Alert'
import FetchedPosts from './components/FetchedPosts'
import PostForm from './components/PostForm'
import Posts from './components/Posts'

function App() {
  return (
    <>
      <header></header>
      <main>
        <div className={styles.form}>
          <PostForm />
        </div>
        <div className={styles.posts}>
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className={styles.fetched_posts}>
          <h2>Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </main>
    </>
  )
}

export default App
