import styled from 'styled-components';

const TitleBar = styled.div`
  background: #00007f;
  color: white;
  width: calc(100% - 6px);
  display: block;
  border: 1px solid #c0c0c0;
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  padding-left: 3px;
  font-weight: bold;

  position: relative;
  display: flex;
  align-items: center;
`;

export default TitleBar;
