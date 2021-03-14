/** @jsxRuntime classic */
/** @jsx jsx*/
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotions = () => {
  const containerStyle = css`
    border: solid 2px #492eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({
    margin: 0,
    color: "blue"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotions -</p>
      <Button>FIGHT!</Button>
    </div>
  );
};

const Button = styled.button`
  background-color: #abedd8;
  border: node;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    cursor: pointer;
  }
`;
