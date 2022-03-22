import React from 'react';
import { observer } from 'mobx-react';
import {
  Block,
  Bar,
  Down,
  TypeFormA,
  TypeFormB,
  InnerBlock,
  OverFlow,
} from './OrderbookUp.styles';

import useExchange from '../../hooks/useExchange';
import useTrades from '../../hooks/useTrades';

const Inner = observer(() => {
  const exchangeStore = useExchange();
  const { tradesData = [] } = useTrades(exchangeStore.symbolID);

  return (
    <InnerBlock colSpan="2" rowSpan="15">
      <dl>
        <dt>체결강도</dt>
        <dd>+100.00%</dd>
      </dl>
      <OverFlow>
        <table>
          <colgroup>
            <col width="50%" />
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>체결가</th>
              <th>체결량</th>
            </tr>
          </thead>
          <tbody>
            {tradesData.map((el, i) => {
              return (
                <tr key={i}>
                  <td>{el.tradePrice}</td>
                  <td className={el.ask_bid === 'ASK' ? 'up' : 'down'}>
                    {el.tradeVolume}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </OverFlow>
    </InnerBlock>
  );
});

const OrderbookUp = ({ idx, data }) => {
  return (
    <Block>
      {idx === 0 && <Inner />}
      <Down>
        <a href="#">
          <TypeFormA>
            <strong>{data.bidPrice}</strong>
          </TypeFormA>
          <TypeFormB>-1.87%</TypeFormB>
        </a>
      </Down>
      <Bar>
        <a href="#">
          <div style={{ width: '9.01613%' }}>-</div>
          <p>{data.bidSize}</p>
        </a>
      </Bar>
      <td></td>
    </Block>
  );
};

export default OrderbookUp;
