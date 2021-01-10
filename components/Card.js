import styles from '../styles/Card.module.scss';

const Card = (props) => {
  return (
    <div className={styles["card"]}>
      <img src={props.imgSrc} alt={props.title} crossOrigin="anonymous" />
      <div className={styles["card-body"]}>
        <h1 className={styles["card-title"]}>{props.title}</h1>
        <p className={styles["card-desc"]}>{props.desc}</p>
        <a
          href={props.demoHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["card-link"]}
        >
          Demo
        </a>
        {props.githubHref ?
          <a
            href={props.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["card-link"]}
          >
            Source
          </a>
        : null}
      </div>
    </div>
  );
};

export default Card;
