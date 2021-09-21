import VideoList from '../components/VideoList/VideoList'
import SearchBar from '../components/SearchBar/SearchBar'
import Layout from '../components/Layout/Layout'
import { useEffect, useState } from 'react'

const Home = (props) => {
  return (
    <>
    <SearchBar />
    <Layout>
      <VideoList videos={props.videos} /> 
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3003/mock')
  const data = await res.json()

  return {
    props: {
      videos: data.map(({ snippet, id:{ videoId } }) => ({
          title: snippet.title,
          description: snippet.description,
          id: videoId,
      })), 
    },
  };
}

export default Home
