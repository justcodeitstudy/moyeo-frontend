import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Tooltip } from "jci-moyeo-design-system";

export interface SkillItemProps {
  name: string;
  src: string;
}

const SkillItem = ({ name, src }: SkillItemProps) => {
  return (
    <Tooltip
      content={name}
      // eslint-disable-next-line react/no-children-prop
      children={<StyledImage src={src} alt={name} width="36px" height="36px" />}
    />
  );
};

export default SkillItem;

const StyledImage = styled(Image)`
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.general[300]};
  border-radius: 50%;
`;
