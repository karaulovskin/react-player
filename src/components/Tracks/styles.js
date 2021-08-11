import styled, { css } from 'styled-components';

export const Root = styled.div`

`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #8c8c8c;
  ${({ background, uppercase }) => css`
    ${background &&
      css`
        background: #303738;
      `
    }
    ${uppercase &&
      css`
        text-transform: uppercase;
        font-weight: 600;
        font-size: 12px;
      `
    }
  `}
  &:not(:last-child) {
    margin-bottom: .5rem;
  }
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
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TitlePrimary = styled.span`
  font-weight: 700;
  color: white;
`;

export const TitleRemixed = styled.span`
  margin-left: .5em;
`;