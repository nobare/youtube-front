import Image from 'next/image'
import css from './SearchBar.module.css'
import logo from '../../public/youtube-logo.svg.png'
import { useRef } from 'react';


const SearchBar = (props) => {
  const InputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredSearch = InputRef.current.value;

    const data = {
      query: enteredSearch
    }
    props.searchInput(data);
  }

  return (
    <div className={css.container}>
      <div className={css.image}>
        <Image src={logo} alt='aang' />
      </div>
      <form className={css.form} onSubmit={submitHandler}>
        <input type='text' placeholder='Search' ref={InputRef} />

        <button>Submit</button>
      </form>
    </div>
  ) 
}

export default SearchBar
