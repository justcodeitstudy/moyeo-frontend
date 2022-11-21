import { Button, Chip, Select, TextInput } from "jci-moyeo-design-system";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Email,
  ProfileContainer,
  UserNickName,
  UserProfileContainer,
  SubCategoryText,
} from "./Info";
import { useFormik } from "formik";
import Avatar from "components/common/Avatar";
import dynamic from "next/dynamic";
import Section from "components/common/Section";
import { MyProfileResDTO } from "../../models/user";
import { useGetSkill } from "../../queries/skill";
import { GetSkillRes } from "../../models/skill";

const Viewer = dynamic(() => import("../common/Viewer"), {
  ssr: false,
});

interface InfoFormProps {
  myInfo?: MyProfileResDTO;
  onUpdate: () => void;
}

const { Option } = Select;

const initialValue = {
  skillIds: [],
  nickname: "",
  introduction: "",
  email: "",
  picture: "",
};

export const InfoForm = ({ myInfo, onUpdate }: InfoFormProps) => {
  const { data: skills } = useGetSkill();
  const [optionList, setOptionList] = useState(skills);
  const [mySkillList, setMySkillList] = useState<string[]>([]);

  console.log(mySkillList);

  const { handleSubmit, submitForm, handleChange, setFieldValue, values } =
    useFormik({
      initialValues: myInfo || initialValue,
      onSubmit: (values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        onUpdate();
      },
    });

  const handleSelectChange = (value: string) => {
    const multiSelectValues = values.skillIds ?? [];
    const isIncludeValue = multiSelectValues.includes(value);

    if (isIncludeValue) {
      return setFieldValue(
        "skills",
        multiSelectValues.filter((x) => x !== value),
      );
    }

    setFieldValue("skills", multiSelectValues.concat(value));
  };

  const handleSelectClose = () => {
    setOptionList(skills);
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLDivElement>,
    label?: string,
  ) => {
    const value = skills?.find((skill) => skill.name === label);

    setFieldValue(
      "skills",
      values.skillIds.filter((x) => x !== value),
    );
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value?.trim();

    if (!inputValue) {
      return setOptionList(skills);
    }

    setOptionList(skills.filter(({ label }) => label.includes(inputValue)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProfileContainer>
        <UserProfileContainer>
          <Avatar id="" />
          <UserNickName>{myInfo?.nickname}</UserNickName>
        </UserProfileContainer>
        <PcButton
          variants="filled"
          color="primary"
          type="submit"
          onClick={submitForm}
        >
          수정 완료
        </PcButton>
      </ProfileContainer>
      <Email>연결 계정 · {myInfo?.email}</Email>
      <SubCategoryText>닉네임 수정</SubCategoryText>
      <StyledInputContainer>
        <StyledTextInput
          id="nickname"
          name="nickname"
          onChange={handleChange}
          value={values?.nickname}
          message="한영, 최대 10글자 이내, 공백 특수문자 불가"
        />
      </StyledInputContainer>
      <SubCategoryText>기술 스택 수정</SubCategoryText>
      <StyledInputContainer>
        <ChipContainer>
          {mySkillList?.map((value) => {
            return (
              <StyledChip
                key={value}
                color="basic"
                variants="pill"
                onDelete={handleDelete}
                label={value}
              />
            );
          })}
        </ChipContainer>
        <Select
          isMulti
          value={["asdf"]}
          onSelect={handleSelectChange}
          onChange={setMySkillList}
          onClose={handleSelectClose}
          placeholder="태그를 입력해주세요."
          onSearchInputChange={handleSearchInputChange}
        >
          {optionList?.length === 0 && (
            <TagNotFoundText>검색된 태그가 없습니다.</TagNotFoundText>
          )}
          {optionList?.map(({ id, name }) => (
            <Option key={id} value={name}>
              {name}
            </Option>
          ))}
        </Select>
      </StyledInputContainer>
      <SubCategoryText>자기소개</SubCategoryText>
      <Section>
        <InfoText>
          <Viewer initialValue={myInfo?.introduction} />
        </InfoText>
      </Section>
      <MobileButton
        variants="filled"
        color="primary"
        type="submit"
        onClick={submitForm}
      >
        수정 완료
      </MobileButton>
    </form>
  );
};

const ChipContainer = styled("div")`
  margin-bottom: 8px;
  display: flex;
`;

const StyledChip = styled(Chip)`
  margin-right: 4px;
`;

const TagNotFoundText = styled("span")`
  padding: 10px 12px;
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.black[300]};
`;

const InfoText = styled("div")`
  padding: 20px 20px 32px 20px;
`;

const StyledTextInput = styled(TextInput)`
  width: 100%;
`;

const StyledInputContainer = styled("div")`
  width: 343px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    width: 100%;
  }
`;

const PcButton = styled(Button)`
  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    display: none;
  }
`;

const MobileButton = styled(Button)`
  width: 100%;
  margin-top: 20px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    display: none;
  }
`;
