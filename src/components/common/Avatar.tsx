import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export interface AvatarProps {
  id: string;
  src?: string;
}

const Avatar = ({ id, src = "/moyomi_profile.svg" }: AvatarProps) => {
  return (
    <Link href={`/profile/${id}`} passHref>
      <AvatarLink>
        <Image alt="avatar" src={src} width="36px" height="36px" />
      </AvatarLink>
    </Link>
  );
};

export default Avatar;

const AvatarLink = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  border-radius: 999px;
  overflow: hidden;
`;
