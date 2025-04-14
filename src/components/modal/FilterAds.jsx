import styled from 'styled-components';
import str from '../../localized/languages/ptBr';

const Overlay = styled.div`
  color: white;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 20vh;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: ${({ theme }) => theme.background[1]};
  border-radius: 20px;
  padding: 20px;
  width: 70%;
  max-height: 50vh;
  overflow-y: auto;
`;

const Option = styled.button`
  color: white;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
`;

function FilterAds({ list, isOpen, closeModal, setter }) {
  if (!isOpen) return null;

  const formatText = (text) => {
    const t = text || str.all;
    return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
  };

  const handleSelect = (tag) => {
    setter(tag);
    closeModal(false);
  };

  return (
    <Overlay onClick={() => closeModal(false)}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Option onClick={() => handleSelect(undefined)}>{formatText(undefined)}</Option>
        {list.map(tag => (
          <Option key={tag} onClick={() => handleSelect(tag)}>{formatText(tag)}</Option>
        ))}
      </ModalBox>
    </Overlay>
  );
}

export default FilterAds;
