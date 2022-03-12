import React from 'react';
import { Block } from './Footer.styles';

function Footer() {
  return (
    <Block className="sub">
      <div>
        <a>UPeth</a>
        <div className="aboutUS">
          <p className="contact">
            <span>고객센터</span>
            <span>1588-5682</span>
            <span>서울시 강남구 테헤란로 4길 14, 2층</span>
          </p>
          <p className="ourCompany">
            <span>두나무 주식회사</span>
            <span>서울시 강남구 테헤란로 4길 14, 5층</span>
            <span>대표 이석우</span>
            <span>사업자등록번호 119-86-54968</span>
          </p>
          <p className="Officer">
            <span>기사 배열 책임자 박동규</span>
            <span>청소년 보호 책임자 송세정</span>
          </p>
          <p className="copyright">Copyright © 2017 - 2022 Dunamu Inc.</p>
        </div>
        <div className="footerMenu">
          <dl>
            <dt>회사</dt>
            <dd>
              <a>회사소개</a>
            </dd>
            <dd>
              <a>공지사항</a>
            </dd>
            <dd>
              <a>이용약관</a>
            </dd>
            <dd>
              <a>Open API 이용약관</a>
            </dd>
            <dd>
              <a>
                <strong>개인정보처리방침</strong>
              </a>
            </dd>
          </dl>
          <dl>
            <dt>고객지원</dt>
            <dd>
              <a>자주하는 질문(FAQ)</a>
            </dd>
            <dd>
              <a>카카오톡 문의(24시간)</a>
            </dd>
            <dd>
              <a>1:1 문의하기</a>
            </dd>
            <dd>
              <a>Open API</a>
            </dd>
            <dd>
              <a>거래 이용 안내</a>
            </dd>
            <dd>
              <a>입출금 이용 안내</a>
            </dd>
            <dd>
              <a>상장문의 및 제보 (Listing Inquiry)</a>
            </dd>
          </dl>
        </div>
      </div>
    </Block>
  );
}

export default Footer;
