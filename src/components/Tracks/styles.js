import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: .5rem;
  background: #303738;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 20%;
  margin-right: 8px;
  &:nth-child(1) {
    width: 55px;
    min-width: 55px;
    height: 55px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TitlePrimary = styled.span`
  font-weight: 700;
`;

export const TitleRemixed = styled.span`
  margin-left: .5em;
  color: #8c8c8c;
`;