import React, { useState, useCallback } from 'react';
import { Block } from './HighlightB.styles';
import Image from 'next/image'

const ImageComponent = React.memo(({ idx, hlOption, alt }) => {
  const source = hlOption[0] === parseInt(idx) ?
    (
      hlOption[1]
        ? 'https://cdn.upbit.com/images/ico_up_down_2.71770c7.png'
        : 'https://cdn.upbit.com/images/ico_up_down_1.d63eb3d.png'
    )
    : 'https://cdn.upbit.com/images/ico_up_down.d050377.png';
  return <Image src={source} alt={alt} />;
});
ImageComponent.displayName = "ImageComponent";

const HighlightB = () => {
  const [korName, setKorName] = useState(true);
  const [hlOption, setHlOption] = useState([3, true]);

  const selectHlOption = useCallback(
    (idx) => {
      if (idx === hlOption[0]) setHlOption([idx, !hlOption[1]]);
      else setHlOption([idx, true]);
    },
    [hlOption]
  );

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
            <a href="#" onClick={() => setKorName((prevState) => !prevState)}>
              {korName ? '한글명' : '영문명'}
              <Image src="https://cdn.upbit.com/images/ico_change.c6ad0e9.png" alt="asdf" />
            </a>
          </th>
          <th>
            <a href="#" onClick={() => selectHlOption(1)}>
              현재가
              <ImageComponent idx="1" hlOption={hlOption} alt="현재가" />
            </a>
          </th>
          <th>
            <a href="#" onClick={() => selectHlOption(2)}>
              전일대비
              <ImageComponent idx="2" hlOption={hlOption} alt="전일대비" />
            </a>
          </th>
          <th>
            <a href="#" onClick={() => selectHlOption(3)}>
              거래대금
              <ImageComponent idx="3" hlOption={hlOption} alt="거래대금" />
            </a>
          </th>
        </tr>
      </thead>
    </Block>
  );
};

export default HighlightB;
