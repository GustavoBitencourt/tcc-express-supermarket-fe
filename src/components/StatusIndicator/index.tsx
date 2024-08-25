import React from 'react'
import styled from 'styled-components'

interface StatusIndicatorProps {
  activeStep: number
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ activeStep }) => {
  return (
    <StatusContainer>
      <StatusItem active={activeStep === 1}>
        <div className='status-number'>1</div>
        Pedido
      </StatusItem>

      <LineStatus />

      <StatusItem active={activeStep === 2}>
        <div className='status-number'>2</div>
        Local
      </StatusItem>

      <LineStatus />

      <StatusItem active={activeStep === 3}>
        <div className='status-number'>3</div>
        Dados
      </StatusItem>

      <LineStatus />

      <StatusItem active={activeStep === 4}>
        <div className='status-number'>4</div>
        Pagamento
      </StatusItem>
    </StatusContainer>
  )
}

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fffbd3;
  box-shadow: 0px 8px 24px 0px rgba(112, 144, 176, 0.2);
  padding: 1rem;
  margin-top: 5.53rem;
  height: 7.5rem;
  width: 100%;
  position: relative;
`

interface StatusItemProps {
  active: boolean
}

const StatusItem = styled.div<StatusItemProps>`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  color: ${(props) => (props.active ? '#56BA50' : '#CBCBCB')};
  position: relative;

  .status-number {
    background-color: #fffbd3;
    border: ${(props) => (props.active ? '2px solid #56BA50' : '2px solid #CBCBCB')};
    color: ${(props) => (props.active ? '#56BA50' : '#CBCBCB')};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;
    position: relative;
    z-index: 1;
  }
`

const LineStatus = styled.div`
  position: absolute;
  top: 40%;
  margin-left: 13%;
  left: 0;
  width: 73%;
  transform: translateY(-50%);
  height: 2px;
  background-color: #cbcbcb;
  z-index: 0;
`

export default StatusIndicator
