import SearchB from '../search/SearchB';
import TabB from '../tab/TabB';
import styles from '../../styles/SectionB.module.css';

function SectionB() {
  return (
    <div className={styles.sectionB}>
      <article>
        <SearchB />
        <TabB />
      </article>
    </div>
  );
}

export default SectionB;
