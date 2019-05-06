import styled from 'styled-components';

export const Wrap = styled.div`
  display: inline-block;
  border-right-color: rgb(255, 255, 255);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(5, 6, 8);
  border-top-color: rgb(5, 6, 8);
  border-style: solid;
  border-width: 1px;
  width: 100%;
`;

export const TableHeader = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid rgb(5, 6, 8);
`;

export const HeaderItem = styled.div`
  border-left: 2px solid rgb(255, 255, 255);
  border-top: 2px solid rgb(255, 255, 255);
  border-right: 2px solid rgb(5, 6, 8);

  width: ${({ width }) => (width ? width : 0)}%;

  padding: 2px 5px;
  font-size: 14px;

  @media only screen and (max-width: 767px) {
    display: ${({ widthSm }) => (widthSm > 0 ? 'block' : 'none')};
    width: ${({ widthSm }) => (widthSm ? widthSm : 0)}%;
  }
`;

export const TableBody = styled.div`
  border-right: 1px solid rgb(5, 6, 8);
  border-bottom: 1px solid rgb(255, 255, 255);
  border-left: 1px solid rgb(5, 6, 8);

  background-color: #fafafa;

  width: 100%;
  min-height: 200px;
`;

export const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;

  &:hover {
    background-color: #00007f;
    color: white;
  }
`;

const Item = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
`;

export const Title = styled(Item)`
  width: calc(25% - 5px);

  @media only screen and (max-width: 767px) {
    width: calc(60% - 5px);
    margin-right: 10px;
  }
`;

export const Size = styled(Item)`
  width: calc(5% - 5px);

  @media only screen and (max-width: 767px) {
    width: 0;
  }
`;

export const Type = styled(Item)`
  width: calc(10% - 5px);

  @media only screen and (max-width: 767px) {
    width: 0;
  }
`;

export const Modified = styled(Item)`
  width: calc(20% - 5px);

  @media only screen and (max-width: 767px) {
    width: calc(40% - 5px);
  }
`;

export const Icon = styled.img`
  height: 16px;
  margin-right: 2px;
`;
