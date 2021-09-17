import Image from 'next/image'
import css from './Card.module.css';

function Card (props) {
  return (
  <>
    <Image></Image>
    <img className={css.img} src={props.image} alt={props.title} />
    <div className={css.card}>{props.children}</div>
  </>
  )
}

export default Card; 