import React from 'react';
import styled from 'styled-components';

const Intersection = styled.div`
  position: relative;
  display: inline-block;
  margin: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 14px;
    background: #a4b5b9;
    height: 2px;
    width: 30px;
    z-index: 2;
  }
  &:after {
    content: "";
    position: absolute;
    left: 14px;
    top: 0px;
    background: #a4b5b9;
    height: 30px;
    width: 2px;
    z-index: 2;
  }
`;

const BlueStone = styled.div`
  border-radius: 50%;
  background: radial-gradient(farthest-corner at 10px 10px, #00238b, #67cdf6);
  position: relative;
  z-index: 3;
  width: 26px;
  height: 26px;
  margin: 2px;
  box-shadow: 1px 1px 2px #87cdf6;
`;

const GreenStone = styled.div`
  border-radius: 50%;
  border: none;
  background: radial-gradient(farthest-corner at 10px 10px, #006323, #7ae68c);
  position: relative;
  z-index: 3;
  width: 26px;
  height: 26px;
  margin: 2px;
  box-shadow: 1px 1px 2px #8ce68c;
`;

export default function Stone({
  stoneColor,
  handlePlaceStone,
  rowIndex,
  colIndex,
}) {
  return (
    <Intersection onClick={() => { handlePlaceStone(rowIndex, colIndex); }}>
      { (stoneColor === 'green') && <GreenStone /> }
      { (stoneColor === 'blue') && <BlueStone /> }
    </Intersection>
  );
}
