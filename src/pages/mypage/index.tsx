import React from "react";
import { DefaultLayout } from "layouts/DefaultLayout";
import { NextPageWithLayout } from "pages/_app";
import { MyPageComponent } from "components/mypage/MyPageComponent";

const MyPage: NextPageWithLayout = () => {
  return <MyPageComponent />;
};

MyPage.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default MyPage;
