import { Block } from './SectionB.styles';

import SearchB from '../search/SearchB';
import TabB from '../tab/TabB';

function SectionB() {
  return (
    <Block>
      <article>
        <SearchB />
        <TabB />
      </article>
    </Block>
  );
}

export default SectionB;
