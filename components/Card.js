import styles from '../styles/Card.module.scss';

const Card = (props) => {
  return (
    <div className={styles['card']}>
      <img src={props.imgSrc} alt={props.title} />
      <div className={styles['card-content']}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <a href={props.demoHref} target="_blank" rel="noopener noreferrer" className={styles['card-link']}>Demo</a>
        <a href={props.githubHref} target="_blank" rel="noopener noreferrer" className={styles['card-link']}>Github</a>
      </div>
    </div>
  );
}

export default Card;
