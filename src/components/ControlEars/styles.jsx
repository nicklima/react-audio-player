import styled from "styled-components";

export const ListIcon = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  overflow: hidden;
  padding-left: 2px;
  width: 21px;

  span {
    background: ${({ theme }) => theme.text};
    border-radius: 15px;
    height: 20px;
    margin: 0 2px 0 0;
    position: relative;
    width: 4px;

    &:before {
      background: ${({ theme }) => theme.text};
      border-radius: 50%;
      content: "";
      height: 10px;
      left: 0px;
      position: absolute;
      top: -2px;
      width: 10px;
    }

    &:first-child {
      margin-right: 3px;
      margin-top: 8px;

      &:before {
        height: 10px;
        left: -6px;
        position: absolute;
        top: -2px;
        width: 10px;
      }
    }
  }
`;
