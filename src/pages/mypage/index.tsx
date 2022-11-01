import React from "react";
import { MyPageComponent } from "components/mypage/MyPageComponent";
import { NextPageWithLayout } from "pages/_app";
import { DefaultLayout } from "layouts/DefaultLayout";

const MyPage: NextPageWithLayout = () => {
  return <MyPageComponent />;
};

MyPage.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default MyPage;
