import React from 'react';
import styled from 'styled-components';

const StepsWrapper = styled.div`
  margin: 20px auto;
  text-align: left;
  button {
    color: #012345;
    background: #d3e5e7;
    border: none;
    padding: 8px;
    margin: 8px;
  }
`

const PlayersInfo = styled.div`
  font-family: Courier,monospace;
`

const WinMessage = styled.div`
  font-size: 32px;
  color: #023356;
  text-shadow: 0 0 2px #677889, 0 0 2px #677889;
  height: 50px;
`

const NextColor = styled.div`
  font-size: 28px;
  color: #012345;
  height: 50px;
`


export default function Steps({
  records,
  handleRewind,
  thisStoneColor,
  winner
}) {
  console.log(thisStoneColor)
  return(
    <StepsWrapper>
      <PlayersInfo>
      { winner && <WinMessage>Winner: {winner.toUpperCase()}</WinMessage>}
      { !winner && <NextColor>Next: { thisStoneColor.toUpperCase() }</NextColor>}
      </PlayersInfo>
      {
        records.map((record, recordIndex) => (
          <button
            key={recordIndex}
            value={recordIndex}
            onClick={handleRewind}>
              {' '}
              {recordIndex}
          </button>
        ))
      }
    </StepsWrapper>
  )
}
