import styles from './HeaderContent.scss';
import logotype from './img/logotype.svg';

function HeaderContent() {
  const { HeaderBackground } = styles;
  return <img src={logotype} alt="logotype" className={HeaderBackground} />;
}

export default HeaderContent;
