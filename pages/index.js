import VideoList from '../components/VideoList/VideoList'
import SearchBar from '../components/SearchBar/SearchBar'
import Layout from '../components/Layout/Layout'
import { useState } from 'react'

const Home = () => {

  const [videos, setVideos] = useState({})
  const Handler = async (search) => {
    
    const response = await fetch('/api/videos', {
      method: 'POST',
      body: JSON.stringify(search),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    setVideos(data)
  }

  return (
    <>
    <SearchBar searchInput={Handler}/>
    <Layout>
      {
        videos.length && <VideoList videos={videos} /> 
      }
    </Layout>
    </>
  )
}

export default Home
