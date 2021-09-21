import css from './Card.module.css'

const Card = (props) => {
  return (
    <div className={css.container}>
      <div className={css.images}>
        <img src={`https://i.ytimg.com/vi/${props.image}/mqdefault.jpg`}></img>
      </div>
        <h2 className={css.title}> {props.title} </h2>
    </div>
  )
}

export default Card
