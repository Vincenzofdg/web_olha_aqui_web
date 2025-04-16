import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { useTextForm } from '../../hooks/useTextForm';

const maxDescriptionLength = 500;

const Input = styled.textarea`
  border: 1px solid ${theme.background[7]};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  font-size: 16px;
  background-color: ${theme.background[4]};
  resize: none;
  width: 100%;
  height: ${props => (props.$isDescription ? '200px' : 'auto')};
`;

const InputText = styled.input`
  border: 1px solid ${theme.background[7]};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  font-size: 16px;
  background-color: ${theme.background[4]};
  width: 100%;
`;

const LengthCounter = styled.div`
  color: ${theme.text[1]};
  text-align: right;
  font-size: 14px;
  margin-bottom: 8px;
`;

function TextForm({ info, setter }) {
  const { value, handleChange } = useTextForm();

  const renderInput = () => {
    if (info.identifier === 'description') {
      return (
        <>
          <Input
            name={info.identifier} 
            placeholder={info.label}
            value={value[info.identifier] || ''}
            onChange={handleChange}
            maxLength={maxDescriptionLength}
            $isDescription
          />
          <LengthCounter>
            {value[info.identifier]?.length || 0} / {maxDescriptionLength}
          </LengthCounter>
        </>
      );
    }
    return (
      <InputText
        name={info.identifier}
        type={info.identifier === 'email' ? 'email' : 'text'}
        placeholder={info.label}
        value={value[info.identifier] || ''}
        onChange={handleChange}
        maxLength={30}
        autoComplete={info.identifier === 'email' ? 'email' : 'off'}
      />
    );
  };

  return renderInput();
}

export { TextForm };
