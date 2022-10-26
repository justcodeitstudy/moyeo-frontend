import { Tabs } from "jci-moyeo-design-system";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Info } from "./Info";
import { ProjectStudy } from "./ProjectStudy";
import { Scrap } from "./Scrap";

const myPageMenus = [
  {
    id: 1,
    value: "info",
    label: "내 정보",
  },
  {
    id: 2,
    value: "project",
    label: "내 프로젝트/스터디",
  },
  {
    id: 3,
    value: "scrap",
    label: "스크랩",
  },
];

export const MyPageComponent = () => {
  const [selected, setSelected] = useState("info");

  const handleSelect = useCallback(
    (value: string) => {
      setSelected(value);
    },
    [setSelected],
  );

  return (
    <PageContainer>
      <StyledHeader>마이페이지</StyledHeader>
      <TabContainer>
        <Tabs>
          {myPageMenus.map(({ label, value }, index) => {
            return (
              <Tabs.Item
                key={index}
                value={value}
                selected={selected === value}
                onTabSelect={handleSelect}
              >
                {label}
              </Tabs.Item>
            );
          })}
        </Tabs>
      </TabContainer>
      {selected === "info" && (
        <TabPanel>
          <Info />
        </TabPanel>
      )}
      {selected === "project" && (
        <TabPanel>
          <ProjectStudy />
        </TabPanel>
      )}
      {selected === "scrap" && (
        <TabPanel>
          <Scrap />
        </TabPanel>
      )}
    </PageContainer>
  );
};

const PageContainer = styled("div")`
  margin: 52px 0;
  width: 100%;
  height: 100%;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    margin: 24px 0;
  }
`;

const StyledHeader = styled("header")`
  ${({ theme }) => theme.typography.header1};
`;

const TabContainer = styled("div")`
  padding-top: 20px;
`;

const TabPanel = styled("div")`
  padding-top: 32px;
`;
