// FormComponent.tsx
import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import MarkOn from '../../../../assets/mark-on.svg'
import MarkOff from '../../../../assets/mark-off.svg'

interface FormComponentProps {
  onSelectOption: (option: string) => void
  selectedOption: string
}

const FormContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: -3.5rem;
`

const Option = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid
    ${({ theme, selected }) => (selected ? theme.colors.green : theme.colors.gray450)};
`

const OptionText = styled.div<{ selected: boolean }>`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme, selected }) => (selected ? theme.colors.darkgreen : theme.colors.gray450)};
`

const OptionDescription = styled.div<{ selected: boolean }>`
  font-size: 12px;
  color: ${({ theme, selected }) => (selected ? theme.colors.darkgreen : theme.colors.gray450)};
`

const FormComponent: React.FC<FormComponentProps> = ({ onSelectOption, selectedOption }) => {
  const handleOptionClick = (option: string) => {
    onSelectOption(option)
  }

  return (
    <FormContainer>
      <Option selected={selectedOption === 'option1'} onClick={() => handleOptionClick('option1')}>
        <ReactSVG src={selectedOption === 'option1' ? MarkOn : MarkOff} />
        <div>
          <OptionText selected={selectedOption === 'option1'}>Cancelar o item</OptionText>
          <OptionDescription selected={selectedOption === 'option1'}>
            O item será cancelado e removido do pedido.
          </OptionDescription>
        </div>
      </Option>
      <Option selected={selectedOption === 'option2'} onClick={() => handleOptionClick('option2')}>
        <ReactSVG src={selectedOption === 'option2' ? MarkOn : MarkOff} />
        <div>
          <OptionText selected={selectedOption === 'option2'}>Substituir o item</OptionText>
          <OptionDescription selected={selectedOption === 'option2'}>
            O item será substituído por um item semelhante.
          </OptionDescription>
        </div>
      </Option>
    </FormContainer>
  )
}

export default FormComponent
