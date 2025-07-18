import styled from "styled-components";

export const SettingsPanel = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.mobile};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  transition: 0.4s ease-in-out;
  transform: ${({ $active }) =>
    $active ? "translateY(0)" : "translateY(100%)"};
  width: 100%;
  z-index: 5;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  margin-bottom: 35px;
`;
