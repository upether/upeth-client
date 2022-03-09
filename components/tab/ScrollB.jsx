import { Block } from './ScrollB.styles';

import TableB from '../table/TableB';

function ScrollB() {
  return (
    <Block>
      {Array(20)
        .fill()
        .map((el, i) => (
          <TableB key={i} />
        ))}
    </Block>
  );
}

export default ScrollB;
