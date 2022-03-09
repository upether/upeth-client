import { Block } from './TabB.styles';

import Highlight from './Highlight';
import ScrollB from './ScrollB';

function TabB() {
  return (
    <Block>
      <ul>
        <li>
          <a className="on" href="#">
            원화
          </a>
        </li>
        <li>
          <a href="#">BTC</a>
        </li>
        <li>
          <a href="#">USDT</a>
        </li>
        <li>
          <a href="#">보유</a>
        </li>
        <li>
          <a href="#">관심</a>
        </li>
      </ul>
      <Highlight />
      <ScrollB />
    </Block>
  );
}

export default TabB;
