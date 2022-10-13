import React from "react";
import { NextPageWithLayout } from "./_app";
import { IndexPageComponent } from "components/IndexPageComponent";
import MainLayout from "layouts/MainLayout";

const Index: NextPageWithLayout = () => {
  return <IndexPageComponent />;
};

Index.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;
