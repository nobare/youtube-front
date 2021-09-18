import Image from 'next/dist/client/image'
import appa from '../../public/appa-and-aang.jpg'
import css from './Card.module.css'

const Home = () => {
  return (
    <div className={css.card}>
      <div className={css.body}>
        <Image src={appa} alt='aang' />
        <h1 className={css.title}>Daughter - Smother</h1>
        <p className={css.description}>Elena we love you</p>
      </div>
    </div>
  )
}

export default Home
