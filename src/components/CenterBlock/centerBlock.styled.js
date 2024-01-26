import styled, { css } from "styled-components";

export const MainCenterBlock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;

export const H2CenterBlock = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

export const CenterBlockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Col01 = css`
  width: ${({ $width01 }) => $width01}px;
`;

export const Col02 = css`
  width: ${({ $width02 }) => $width02}px;
`;

export const Col03 = css`
  width: ${({ $width03 }) => $width03}px;
`;

export const Col04 = css`
  width: ${({ $width04 }) => $width04}px;
  text-align: end;
`;

export const PlayListTitleTrack = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  /* color: #696969; */
  text-transform: uppercase;
  ${Col02};
  ${Col03};
  ${Col04};
`;

export const PlayListTitleSVG = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const ContentPlayList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`;
