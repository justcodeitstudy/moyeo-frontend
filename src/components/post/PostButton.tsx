import { Icon, Theme } from "jci-moyeo-design-system";
import React from "react";
import styled from "styled-components";

export interface PostButtonProps {
  name: "checkInCircle" | "write" | "delete";
  checked?: boolean;
}

const PostButton = ({ name, checked }: PostButtonProps) => {
  return (
    <Button checked={checked}>
      <Icon name={name} color={checked ? Theme.colors.general.white : Theme.colors.general[600]} />
    </Button>
  );
};

export default PostButton;

const Button = styled.button<Pick<PostButtonProps, "checked">>`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary["500"] : theme.colors.general["200"]};
  cursor: pointer;
`;
