import {
  Block,
  Select,
  Arrow,
  InfoTab,
  TextReplace,
  Setting,
} from './TitA.styles';

function TitA() {
  return (
    <Block>
      <Select href="">
        <em>
          <img
            src="https://static.upbit.com/logos/WAVES.png"
            alt="https://static.upbit.com/logos/WAVES.png"
          />
        </em>
        <strong>웨이브</strong>
        <p>WAVES/KRW</p>
      </Select>
      <Arrow href="">Arrow</Arrow>
      <InfoTab>
        <dl>
          <TextReplace>시세, 정보 텝</TextReplace>
          <dd>
            <a className="on">시세</a>
          </dd>
          <dd>
            <a>정보</a>
          </dd>
          <Setting>
            <a href="#">화면설정</a>
          </Setting>
        </dl>
      </InfoTab>
    </Block>
  );
}

export default TitA;
