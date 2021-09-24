import css from './Card.module.css'

const Card = (props) => {
  return (
    <div className={css.container}>
      <div className={css.images}>
        <img src={`https://i.ytimg.com/vi/${props.id}/mqdefault.jpg`}></img>
      </div>
        <a className={css.title} href={props.id}> {props.title} </a>
    </div>
  )
}

export default Card
