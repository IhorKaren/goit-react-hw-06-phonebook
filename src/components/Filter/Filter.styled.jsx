import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  display: block;
  margin-right: auto;
`;

const StyledField = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #00aeef;
  }
`;

export { StyledForm, StyledLabel, StyledField };
