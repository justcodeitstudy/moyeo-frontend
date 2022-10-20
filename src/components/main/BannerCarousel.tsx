import React, { useEffect, useState } from "react";
import { Carousel, Chip } from "jci-moyeo-design-system";
import Image from "next/image";
import styled from "styled-components";

const BannerCarousel = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;
  return (
    <Container>
      <Carousel className="carousel">
        <ItemContainer>
          <ContentWrapper>
            <ChipWrapper>
              <Chip
                variants="pill"
                color="active"
                label="고생 끝에 낙이 온다"
                outlined
              />
              <Chip
                variants="pill"
                color="active"
                label="모여로 다 모여"
                outlined
              />
            </ChipWrapper>
            <TitleWrapper>
              <Title>사이드 프로젝트/스터디 찾고 있어?</Title>
              <Title>
                지금 모여로 다 <span>모여</span>!
              </Title>
            </TitleWrapper>
          </ContentWrapper>
          <ImageWrapper>
            <Image
              src={"/assets/banner/banner.webp"}
              layout="fill"
              priority
              alt={"banner"}
            />
          </ImageWrapper>
        </ItemContainer>
      </Carousel>
    </Container>
  );
};

export default BannerCarousel;

const Container = styled.section`
  height: 252px;

  background: ${({ theme }) => theme.colors.primary["100"]};

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    height: 152px;

    .carousel {
      height: 152px;
    }
  }

  .carousel {
    max-width: 1220px;
    margin: auto;
  }
`;

const ItemContainer = styled.div`
  display: flex !important;
  position: relative;
  width: 100%;
  height: 252px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    height: 152px;
    padding: 0 16px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    position: absolute;
    width: 70%;
    height: 50%;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const ContentWrapper = styled.div`
  margin-bottom: 50px;
`;

const ChipWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
  gap: 8px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    display: none;
  }
`;

const TitleWrapper = styled.div``;

const Title = styled.h1`
  display: inline-block;
  font-size: 24px;
  font-weight: 600;

  & > span {
    color: ${({ theme }) => theme.colors.primary["500"]};
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    display: block;
    font-size: 20px;
  }
`;
