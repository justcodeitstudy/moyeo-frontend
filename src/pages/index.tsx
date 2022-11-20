import React from "react";
import { Main } from "components/main";
import { NextPageWithLayout } from "./_app";
import MainLayout from "layouts/MainLayout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getPost } from "../api/post";
import { postKeys } from "../constants/queryKeys";

const Index: NextPageWithLayout = () => {
  return <Main />;
};

Index.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(
    [postKeys.postWithQuery, context.query],
    () =>
      getPost({
        page: 1,
        ...context.query,
      }),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
