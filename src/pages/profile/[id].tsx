import React from "react";
import { Profile } from "components/profile";
import { NextPageWithLayout } from "pages/_app";
import { DefaultLayout } from "layouts/DefaultLayout";

const ProfileDetail: NextPageWithLayout = () => {
  return <Profile />;
};

ProfileDetail.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ProfileDetail;
