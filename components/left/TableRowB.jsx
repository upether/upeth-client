import React from 'react';
import {
  Block,
  Bar,
  Down,
  TypeFormA,
  TypeFormB,
  Inner,
  OverFlow,
} from './TableRowB.styles';

function TableRowB({ idx }) {
  return (
    <Block>
      {idx === 0 && (
        <Inner colSpan="2" rowSpan="15">
          <dl>
            <dt>체결강도</dt>
            <dd>+92.56%</dd>
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
                {Array(30)
                  .fill()
                  .map((el, i) => {
                    return (
                      <tr key={i}>
                        <td>48,819,000</td>
                        <td className="up">0.041</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </OverFlow>
        </Inner>
      )}
      <Down>
        <a href="#">
          <TypeFormA>
            <strong>50,870,000</strong>
          </TypeFormA>
          <TypeFormB>-1.87%</TypeFormB>
        </a>
      </Down>
      <Bar>
        <a href="#">
          <div style={{ width: '9.01613%' }}>-</div>
          <p>0.636</p>
        </a>
      </Bar>
      <td></td>
    </Block>
  );
}

export default TableRowB;
