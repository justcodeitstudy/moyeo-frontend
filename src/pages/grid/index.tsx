import React from "react";
import styled from "styled-components";
import { Grid } from "components/common/Grid";
import { DefaultLayout } from "layouts/DefaultLayout";
import { NextPageWithLayout } from "pages/_app";
import { TextInput } from "jci-moyeo-design-system";

const GridPage: NextPageWithLayout = () => {
  return (
    <PageContainer>
      <StyledGrid>
        <Grid.Item>
          <TextInput width="100%" />
        </Grid.Item>
        <Grid.Item>
          <TextInput width="100%" />
        </Grid.Item>
        <Grid.Item>
          <TextInput width="100%" />
        </Grid.Item>
        <Grid.Item>
          <TextInput width="100%" />
        </Grid.Item>
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
