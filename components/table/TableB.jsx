import {
  Block,
  Bookmark,
  Candle,
  Line,
  Box,
  Title,
  Price,
  Percent,
  Volume,
} from './TableB.styles';

function TableB() {
  return (
    <Block>
      <colgroup>
        <col width="26" />
        <col width="26" />
        <col width="94" />
        <col width="98" />
        <col width="58" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr className="up">
          <td>
            <Bookmark>
              <a href="#">즐겨찾기</a>
            </Bookmark>
          </td>
          <Candle>
            <a href="#">
              <div>
                <Line>-</Line>
                <Box>-</Box>
              </div>
            </a>
          </Candle>
          <Title>
            <a href="#">
              <strong>웨이브</strong>
            </a>
            <em>
              WAVES
              <span>/KRW</span>
            </em>
          </Title>
          <Price>
            <strong>22,450</strong>
            <span></span>
          </Price>
          <Percent>
            <p>+11.89%</p>
            <em>2,410</em>
          </Percent>
          <Volume>
            <p>
              957,471<i>백만</i>
            </p>
          </Volume>
        </tr>
      </tbody>
    </Block>
  );
}

export default TableB;
