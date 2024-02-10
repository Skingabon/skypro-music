import styled from "styled-components"

export const FilterContainer = styled.div`
position: relative;
`;

export const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid ${({$active}) => $active ? '#9A48F1' : '#fff'};
color: ${({$active}) => $active ? '#9A48F1' : 'inherit'};
border-radius: 60px;
padding: 6px 20px;
margin-right: 10px;
&:not(:last-child) {
    margin-right: 10px;
}
`;

