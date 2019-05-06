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
  max-height: 75%;
  margin-right: 3px;
`;

export const Paper = styled.div`
  margin: 0 auto;
  background-color: #fff;
  height: calc(100% - 30px);
  max-height: calc(100% - 30px);
  padding: 5px 5px 0;
  max-width: 800px;

  border-left-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-right-color: rgb(5, 6, 8);
  border-bottom-color: rgb(5, 6, 8);
  border-style: solid;
  border-width: 2px;

  overflow-x: scroll;

  box-shadow: rgb(223, 224, 227) 1px 1px 0px 1px inset,
    rgb(136, 140, 143) -1px -1px 0px 1px inset;
`;
