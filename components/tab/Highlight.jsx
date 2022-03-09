import { Block } from './Highlight.styles';

function Highlight() {
  return (
    <Block>
      <colgroup>
        <col width="26" />
        <col width="26" />
        <col width="94" />
        <col width="88" />
        <col width="78" />
        <col width="*" />
      </colgroup>
      <thead>
        <tr>
          <th colSpan="3">
            <a href="#">
              한글명
              <img src="https://cdn.upbit.com/images/ico_change.c6ad0e9.png" />
            </a>
          </th>
          <th>
            <a href="#">
              현재가
              <img src="https://cdn.upbit.com/images/ico_up_down.d050377.png" />
            </a>
          </th>
          <th>
            <a href="#">
              전일대비
              <img src="https://cdn.upbit.com/images/ico_up_down.d050377.png" />
            </a>
          </th>
          <th>
            <a href="#">
              거래대금
              <img src="https://cdn.upbit.com/images/ico_up_down_2.71770c7.png" />
            </a>
          </th>
        </tr>
      </thead>
    </Block>
  );
}

export default Highlight;
