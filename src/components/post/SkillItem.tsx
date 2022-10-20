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
    <Tooltip content={name}>
      <ImageWrapper>
        <Image src={src} alt={name} width="30px" height="30px" />
      </ImageWrapper>
    </Tooltip>
  );
};

export default SkillItem;

const ImageWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.general[300]};
  border-radius: 999px;
  overflow: hidden;
`;
