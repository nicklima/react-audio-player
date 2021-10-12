import styled from "styled-components";

export const SoundBar = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: auto 1fr auto;
  margin-top: 20px;
`;

export const SoundButton = styled.button`
  background: transparent;
  cursor: pointer;

  svg {
    height: 15px;
    transition: all 0.5s;
    width: 15px;
    fill: #686868;
  }
`;

const thumbSize = "10px";

export const SoundVolume = styled.input`
  width: 98%;
  margin-bottom: 3px;

  &[type="range"] {
    -moz-appearance: none;
    -webkit-appearance: none;

    background: ${({ theme }) => theme.soundBarColor};
    border-radius: 12px;
    height: 3px;
    outline: none;
  }

  &[type="range"]::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    background-color: ${({ theme }) => theme.soundThumbColor};
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    height: ${thumbSize};
    width: ${thumbSize};
  }

  &[type="range"]::-moz-range-thumb {
    background-color: ${({ theme }) => theme.soundThumbColor};
    background-repeat: no-repeat;
    border: 0;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: ${thumbSize};
    width: ${thumbSize};
  }

  &[type="range"]::-ms-thumb {
    background-color: ${({ theme }) => theme.soundThumbColor};
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    height: ${thumbSize};
    width: ${thumbSize};
  }

  &[type="range"]::-moz-focus-outer {
    border: 0;
  }
`;
