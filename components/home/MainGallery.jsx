import Link from 'next/link';
import { Block, BtnList, BtnA, BtnB } from './styles/MainGallery.styles';

const MainGallery = () => {
  return (
    <Block>
      <h1>가장 신뢰받는 글로벌 표준 디지털 자산 거래소</h1>
      <BtnList>
        <Link className='btnA' href='/exchange?code=KRW-BTC'>
          <BtnA>거래소 둘러보기</BtnA>
        </Link>
        <Link className='btnB' href='/signin'>
          <BtnB>로그인</BtnB>
        </Link>
      </BtnList>
    </Block>
  );
};

export default MainGallery;
