import { Block, AskPriceA, AskPriceB } from './Left.styles';

import TableA from './TableA';

function Left() {
  return (
    <Block>
      <article>
        <AskPriceA>
          <div>
            <ul>
              <li>
                <a className="on" href="#">
                  일반호가
                </a>
              </li>
              <li>
                <a href="#">누적호가</a>
              </li>
              <li>
                <a href="#">호가주문</a>
              </li>
            </ul>
          </div>
        </AskPriceA>
        <AskPriceB>
          <div>
            <TableA />
          </div>
        </AskPriceB>
      </article>
    </Block>
  );
}

export default Left;
