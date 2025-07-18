import styled from "styled-components";

export const SongTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -28px 0 10px;
  width: 75%;
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 800;
  opacity: ${({ $current }) => ($current ? "0.5" : "1")};
  transition: all 0.5s;
`;
