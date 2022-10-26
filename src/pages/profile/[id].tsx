import React from "react";
import { DefaultLayout } from "layouts/DefaultLayout";
import { NextPageWithLayout } from "pages/_app";
import { Profile } from "components/profile";

const ProfileDetail: NextPageWithLayout = () => {
  return <Profile />;
};

ProfileDetail.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ProfileDetail;
