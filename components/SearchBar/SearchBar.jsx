import Image from 'next/dist/client/image'
import css from './SearchBar.module.css'
import logo from '../../public/youtube-logo.svg.png'
import { useState } from 'react'


const SearchBar = () => {
  
  const fetcher = url => fetch(url).then(res => res.json())
  const [search, setSearch] = useState('')
  
  const submitInput = async () => {

    const response = useSW('/api/videos', { query: search })

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className={css.container}>
      <div className={css.image}>
        <Image src={logo} alt='aang' />
      </div>
      <form className={css.form}>
        <input type='text' placeholder='Search' value={search}
        onChange={event => setSearch(event.target.value)} />

        <button onClick={submitInput}>Submit</button>
      </form>
    </div>
  ) 
}

export default SearchBar
