import React, { useState } from 'react';
import { observer } from 'mobx-react';
import ChartChange from './ChartChange';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dropdown,
  DropdownItem,
  Nav,
  Menu,
  DropdownButton,
} from './styles/chartNav.styles';

const periodicityTable = {
  minutes: '분',
  days: '일',
  weeks: '주',
  months: '달',
};

const dropdownItems = [
  {
    periodicity: 'minutes',
    periodicityNumber: 1,
  },
  {
    periodicity: 'minutes',
    periodicityNumber: 3,
  },
  {
    periodicity: 'minutes',
    periodicityNumber: 5,
  },
  {
    periodicity: 'days',
    periodicityNumber: 1,
  },
  {
    periodicity: 'weeks',
    periodicityNumber: 1,
  },
  {
    periodicity: 'months',
    periodicityNumber: 1,
  },
];

const ChartNav = observer(({ period, setPeriod }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const isOpenHandler = () => {
    setIsOpenDropdown((prev) => !prev);
  };

  const onClickDropdownItemHandler = (period) => {
    setPeriod(period);
    setIsOpenDropdown((prev) => !prev);
  };

  return (
    <Nav>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ margin: '7px' }}>
          <Link href='/fullChart' passHref>
            <a>
              <Image
                width='26px'
                height='26px'
                src={`https://cdn.upbit.com/images/icon_full.47a02ce.svg`}
                alt={`https://cdn.upbit.com/images/icon_full.47a02ce.svg`}
              />
            </a>
          </Link>
        </div>
        <Menu className='menu'>
          <DropdownButton onClick={isOpenHandler}>
            <div style={{ heigth: '38px', alignContent: 'center' }}>{`${
              period?.periodicityNumber
            }${periodicityTable[period?.periodicity]}`}</div>
          </DropdownButton>
          {isOpenDropdown && (
            <Dropdown>
              {dropdownItems.map(({ periodicity, periodicityNumber }) => (
                <DropdownItem
                  key={`${periodicity} ${periodicityNumber}`}
                  onClick={() =>
                    onClickDropdownItemHandler({
                      periodicity,
                      periodicityNumber,
                    })
                  }
                >
                  {`${periodicityNumber}${periodicityTable[periodicity]}`}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </Menu>
      </div>
      <ChartChange></ChartChange>
    </Nav>
  );
});

export default ChartNav;
