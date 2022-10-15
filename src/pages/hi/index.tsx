import React from "react";
import { DefaultLayout } from "layouts/DefaultLayout";
import { NextPageWithLayout } from "pages/_app";
import { HiPageComponent } from "components/HiPageComponent";

const Hi: NextPageWithLayout = () => {
  return <HiPageComponent />;
};

Hi.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Hi;
