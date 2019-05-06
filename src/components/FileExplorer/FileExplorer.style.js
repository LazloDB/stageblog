import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  border-left-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-right-color: rgb(5, 6, 8);
  border-bottom-color: rgb(5, 6, 8);
  box-shadow: rgb(223, 224, 227) 1px 1px 0px 1px inset,
    rgb(136, 140, 143) -1px -1px 0px 1px inset;
  box-sizing: border-box;
  display: inline-block;
  background-color: rgb(206, 208, 207);
  color: rgb(5, 6, 8);
  padding: 2px;
  border-style: solid;
  border-width: 2px;
`;

export const Icon = styled.img`
  max-height: 85%;
  margin-right: 3px;
`;

export const Toolbar = styled.div`
  display: flex;
  max-width: 100%;
  padding: 2px 9px 4px;
`;

export const SpanStyled = styled.span`
  font-size: 12px;
  margin-right: 10px;

  &::first-letter {
    text-decoration: underline;
  }
`;
