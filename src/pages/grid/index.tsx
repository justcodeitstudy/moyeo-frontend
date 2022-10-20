import React from "react";
import styled from "styled-components";
import { Grid, GridItem } from "components/common/Grid";
import { TextInput } from "jci-moyeo-design-system";
import { DefaultLayout } from "layouts/DefaultLayout";
import { NextPageWithLayout } from "pages/_app";

const GridPage: NextPageWithLayout = () => {
  return (
    <PageContainer>
      <StyledGrid>
        <GridItem>
          <TextInput width="100%" />
        </GridItem>
        <GridItem>
          <TextInput width="100%" />
        </GridItem>
      </StyledGrid>
    </PageContainer>
  );
};

GridPage.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default GridPage;

const PageContainer = styled.div`
  width: 100%;
`;

const StyledGrid = styled(Grid)`
  gap: 12px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    gap: 8px;
  }
`;
