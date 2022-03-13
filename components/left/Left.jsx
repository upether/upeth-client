import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Block, AskPriceA, AskPriceB } from './Left.styles';

import TableA from './TableA';

function Left() {
  const [tapOption, setTapOption] = useState('일반호가');

  return (
    <Block>
      <article>
        <AskPriceA>
          <div>
            <ul>
              <li>
                <a
                  className={tapOption === '일반호가' ? 'on' : ''}
                  href="#"
                  onClick={() => setTapOption('일반호가')}
                >
                  일반호가
                </a>
              </li>
              <li>
                <a
                  className={tapOption === '누적호가' ? 'on' : ''}
                  href="#"
                  onClick={() => setTapOption('누적호가')}
                >
                  누적호가
                </a>
              </li>
              <li>
                <a
                  className={tapOption === '호가주문' ? 'on' : ''}
                  href="#"
                  onClick={() => setTapOption('호가주문')}
                >
                  호가주문
                </a>
              </li>
            </ul>
          </div>
        </AskPriceA>
        <AskPriceB>
          <div>
            <Scrollbars
              style={{ width: '100%', height: '694px' }}
              universal={true}
            >
              <TableA />
            </Scrollbars>
          </div>
        </AskPriceB>
      </article>
    </Block>
  );
}

export default Left;
