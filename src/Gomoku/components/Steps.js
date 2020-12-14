import React from 'react';
import styled from 'styled-components';

const StepsWrapper = styled.div`
  margin: 20px auto;
  text-align: left;
`

const PlayersInfo = styled.div`
  font-family: Courier,monospace;
  display: block;
`

const WinMessage = styled.div`
  font-size: 32px;
  color: #023356;
  text-shadow: 0 0 2px #677889, 0 0 2px #677889;
  height: 50px;
`

const StepsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    cursor: pointer;
    color: #012345;
    background: #dddedf;
    border: none;
    width: 48px;
    padding: 8px;
    margin: 5px;
  }
`

const EmptyDiv = styled.div`
  width: 48px;
  padding: 8px;
  margin: 5px;
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
  return(
    <StepsWrapper>
      <PlayersInfo>
      { winner && <WinMessage>Winner: {winner.toUpperCase()}</WinMessage>}
      { !winner && <NextColor>Next: { thisStoneColor.toUpperCase() }</NextColor>}
      </PlayersInfo>
      <StepsSection>
      {
        records.map((record, recordIndex) => (
          <button
            key={recordIndex}
            value={recordIndex}
            onClick={handleRewind}
          >
            {' '}
            {recordIndex === 0 ? "Start" : recordIndex}
          </button>
        ))
      }
      <EmptyDiv /><EmptyDiv /><EmptyDiv /><EmptyDiv />
      <EmptyDiv /><EmptyDiv /><EmptyDiv /><EmptyDiv />
      </StepsSection>
    </StepsWrapper>
  )
}
