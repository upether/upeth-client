import styles from '../../styles/SectionA.module.css';
import ForeignA from '../foreign/ForeignA';
import MarketA from '../market/MarketA';
import TitA from '../tit/TitA';
import LeftA from './LeftA';
import RightA from './RightA';

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
      <div className={styles.half}>
        <LeftA />
        <RightA />
      </div>
    </div>
  );
}

export default SectionA;
