import { Block, Half } from './SectionA.styles';

import MarketA from '../market/MarketA';
import ForeignA from '../foreign/ForeignA';
import TitA from '../tit/TitA';
import LeftA from './LeftA';
import Right from '../right/Right';

function SectionA() {
  return (
    <Block>
      <article>
        <TitA />
        <div>
          <MarketA />
          <ForeignA />
        </div>
      </article>
      <Half>
        <LeftA />
        <Right />
      </Half>
    </Block>
  );
}

export default SectionA;
