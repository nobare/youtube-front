import VideoList from '../components/VideoList/VideoList'
import SearchBar from '../components/SearchBar/SearchBar'
import Layout from '../components/Layout/Layout'
import { useEffect, useState } from 'react'

const Home = (props) => {
  
/*   const [search, setSearch] = useState()
  const [displayVideos, setDisplayVideos] = useState([]);
  
  const submitInput = async () => {
    const response = await fetch('http://localhost:3003/search', {
      method: 'POST',
      body: JSON.stringify({ query: search }),
      headers: {
        'accept' : 'application/json',
        'Content-Type' : 'application/json',
      }
    })

    const data = await response.json();
    const videos = data.map(({ snippet, id:{ videoId } }) => ({
      title: snippet.title,
      description: snippet.description,
      id: videoId,
    })) 
    console.log(videos);
  }
 */
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
  //console.log(data.map(({id: {videoId}}) => videoId ))

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
