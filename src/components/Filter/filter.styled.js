import styled from "styled-components";

export const FilterListItem = styled.li`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &:hover {
    color: #b672ff;
    cursor: pointer;
    text-decoration-line: underline;
  }
`;

export const FilterList = styled.ul`
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  border-radius: 12px;
  background: #313131;
  height: 305px;
  overflow-y: auto;
  position: absolute;
  left: 0;
  padding: 34px;
  &::-webkit-scrollbar {
  background-color: #4B4949;
  width: 4px;
}
&::-webkit-scrollbar-thumb {
  background-color: #ffffff;
}
`;
