import styles from '../../styles/SectionA.module.css';
import TitA from '../tit/TitA';

function SectionA() {
  return (
    <div className={styles.sectionA}>
      <article>
        <TitA />
      </article>
    </div>
  );
}

export default SectionA;
