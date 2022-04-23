import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import ChartChange from './ChartChange';
import Image from 'next/image'
import Link from 'next/link';


const Dropdown = styled.a`
    float: left;
    margin: 0;
    position: relative;
    height:38px;
`
const DropdownItem = styled.a`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px #d4d6dc;
    padding:20px; 
    clear: both;
    line-height: 27px;
    height: 27px;
    display: flex;
    position: relative;
    z-index: 10;
    cursor: pointer;
    background-color:white;
    text-overflow: clip;
    white-space: nowrap;
`

const Nav = styled.div`
    display:flex;
    justify-content: space-between;
    height: 38px;
    border-bottom: 1px solid #d4d6dc;
    background:#f8f8f8 ;
`;

const StyledSpan = styled.span`
    content: "";
    position: absolute;
    right: 1px;
    top: 15px;
    display: block;
    width: 5px;
    height: 5px;
    border-right: thin solid #999;
    border-bottom: thin solid #999;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    zoom: 1;
`

const Menu = styled.div`
    display:flex;
    flex-direction:column ;
    height: 38px;
    width:38px;
    color: #2b2b2b;
`;


const periodicityTable = {
    "minutes": "분",
    "days": "일",
    "weeks": "주",
    "months": "달",
}
const dropdownItems = [{
    periodicity: "minutes",
    periodicityNumber: 1
}, {
    periodicity: "minutes",
    periodicityNumber: 3
}, {
    periodicity: "minutes",
    periodicityNumber: 5
}, {
    periodicity: "days",
    periodicityNumber: 1
}, {
    periodicity: "weeks",
    periodicityNumber: 1
}, {
    periodicity: "months",
    periodicityNumber: 1
}]

const ChartNav = observer(({ period, setPeriod }) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(period);
    const isOpenHandler = () => {
        setIsOpenDropdown(prev => !prev)
    }

    const onClickDropdownItemHandler = (period) => {
        setPeriod(period);
    }
    return <Nav>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{ margin: "7px" }}>
                <Link href="/fullChart" passHref>
                    <Image
                        width="26px"
                        height="26px"
                        src={`https://cdn.upbit.com/images/icon_full.47a02ce.svg`}
                        alt={`https://cdn.upbit.com/images/icon_full.47a02ce.svg`}
                    />
                </Link>

            </div>
            <Menu className="menu" onClick={isOpenHandler} >
                <button style={{ width: "38px", height: "38px" }}>
                    {`${period?.periodicityNumber}${periodicityTable[period?.periodicity]}`}
                </button>
                {isOpenDropdown && <Dropdown >
                    {dropdownItems.map(({ periodicity, periodicityNumber }) =>
                        <DropdownItem key={`${periodicity} ${periodicityNumber}`}
                            onClick={() => onClickDropdownItemHandler({ periodicity, periodicityNumber })}>
                            {`${periodicityNumber}${periodicityTable[periodicity]}`}
                        </DropdownItem>
                    )}
                </Dropdown>}
            </Menu>
        </div>
        <ChartChange></ChartChange>
    </Nav >
});

export default ChartNav;