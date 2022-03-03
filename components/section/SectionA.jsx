import styles from '../../styles/SectionA.module.css';
import ForeignA from '../foreign/ForeignA';
import MarketA from '../market/MarketA';
import TitA from '../tit/TitA';

function SectionA() {
  return (
    <div className={styles.sectionA}>
      <article>
        <TitA />
        <div>
          <MarketA />
          <ForeignA />
        </div>
      </article>
    </div>
  );
}

export default SectionA;
