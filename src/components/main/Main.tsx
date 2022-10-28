import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BannerCarousel from "./BannerCarousel";
import { Search } from "./Search";
import { PostList } from "components/common/PostList";

const Main = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <BannerCarousel />
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <PostList postList={[]} />
    </>
  );
};

export default Main;

const SearchWrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 52px;
`;
