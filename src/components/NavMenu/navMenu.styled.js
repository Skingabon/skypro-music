import styled from "styled-components";

export const MainNav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`;

export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;

// export const TestNavLogo = styled(NavLogo)`
//   width: ${({ $width }) => $width}px;
// `;

export const TestNavLogo = styled(NavLogo)`
  height: 50px;
  width: 100px;
  background: ${({ $isActive }) => ($isActive ? "red" : "blue")};
`;
// export const  = styled.`

// `;

// export const  = styled.`

// `;

// export const  = styled.`

// `;

// export const  = styled.`

// `;

// export const  = styled.`

// `;

// export const  = styled.`

// `;

// export const  = styled.`

// `;
