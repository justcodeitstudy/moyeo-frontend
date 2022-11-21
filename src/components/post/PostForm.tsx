import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styled from "styled-components";
import { useFormik } from "formik";
import { Button, Chip, Icon, Select, TextInput } from "jci-moyeo-design-system";
import { Grid } from "components/common/Grid";
import PostSelect from "./PostSelect";
import {
  fieldOptions,
  personnelOptions,
  progressOptions,
  typeOptions,
} from "./SelectOptions";
import { usePost } from "../../queries/post";
import { useGetSkill } from "../../queries/skill";
import { GetSkillRes } from "../../models/skill";

const Editor = dynamic(() => import("../common/Editor"), {
  ssr: false,
});

interface PostType<T> {
  [index: string]: T;
}

const progress: PostType<"MIX" | "ONLINE" | "OFFLINE"> = {
  온라인: "ONLINE",
  오프라인: "OFFLINE",
  "온/오프라인": "MIX",
} as const;

const post: PostType<"PROJECT" | "STUDY"> = {
  프로젝트: "PROJECT",
  스터디: "STUDY",
} as const;

interface PostValues {
  title: string;
  content: string;
  postType: string;
  progressType: string;
  userId?: string;
  contactInfo: string;
  recruitmentList: {
    id?: number;
    recruitType: "BACK_END" | "FRONT_END" | "DESIGN" | "PRODUCT" | "ETC";
    recruitPeopleNum: number;
  }[];
  recruitType: string;
  recruitPeopleNum: string;
  skillIds: GetSkillRes[];
}

const { Option } = Select;

const PostForm = () => {
  const { data: skills } = useGetSkill();
  const { mutate: postMutate } = usePost();
  const [optionList, setOptionList] = useState(skills);

  useEffect(() => {
    setOptionList(skills);
  }, [skills]);

  const { values, setFieldValue, handleSubmit, submitForm, handleChange } =
    useFormik<PostValues>({
      initialValues: {
        title: "",
        content: "",
        postType: "",
        progressType: "",
        contactInfo: "",
        skillIds: [],
        recruitmentList: [],
        recruitType: "",
        recruitPeopleNum: "",
      },
      onSubmit: (values) => {
        handleRegisterButton();
        const {
          title,
          content,
          postType,
          progressType,
          contactInfo,
          skillIds,
          recruitmentList,
        } = values;
        postMutate({
          title,
          content,
          postType: post[postType],
          progressType: progress[progressType],
          contactInfo,
          skillIds: skillIds.map((el) => el.id),
          recruitmentList,
        });
      },
    });

  const handleSelectValueChange = useCallback(
    (field: string, value: string) => {
      setFieldValue(field, value);
    },
    [setFieldValue],
  );

  const handleAddClick = useCallback(() => {
    const { recruitType, recruitPeopleNum } = values;
    if (
      values.recruitmentList.some(
        (recruit) => recruit.recruitType === values.recruitType,
      )
    ) {
      const { recruitType, recruitPeopleNum } = values;
      const newField = [{ recruitType, recruitPeopleNum }];

      const result = values.recruitmentList.filter((recruit) => {
        return recruit.recruitType !== recruitType;
      });

      return setFieldValue("recruitmentList", [...result, ...newField]);
    }

    return setFieldValue("recruitmentList", [
      ...values.recruitmentList,
      { recruitType, recruitPeopleNum },
    ]);
  }, [values, setFieldValue]);

  const handleFieldDelete = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, label?: string) => {
      const { recruitmentList } = values;

      setFieldValue(
        "recruitmentList",
        recruitmentList.filter(
          (field) => field.recruitType !== label?.split("-")[0],
        ),
      );
    },
    [values, setFieldValue],
  );

  const editorRef = useRef<any>();

  const handleRegisterButton = () => {
    const editorIns = editorRef?.current?.getInstance();
    const contentMark = editorIns.getMarkdown();
    setFieldValue("content", contentMark);
  };

  const handleSelectChange = (value: string) => {
    const arrValue = optionList?.filter((skill) => skill.name === value);
    const multiSelectValues = values.skillIds;
    const isIncludeValue = multiSelectValues.some(
      (skill) => skill.name === value,
    );

    if (isIncludeValue) {
      return setFieldValue(
        "skillIds",
        multiSelectValues.filter((x) => x.name !== value),
      );
    }
    if (arrValue) {
      setFieldValue("skillIds", [...multiSelectValues, ...arrValue]);
    }
  };

  const handleSelectClose = () => {
    setOptionList(skills);
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLDivElement>,
    label?: string,
  ) => {
    setFieldValue(
      "skillIds",
      values.skillIds.filter((x) => x.name !== label),
    );
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value?.trim();

    if (!inputValue) {
      return setOptionList(skills);
    }

    setOptionList(skills?.filter(({ name }) => name.includes(inputValue)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TitleContainer>
        <Image
          src="/moyomi_01.svg"
          alt="moyomi_01"
          width="36px"
          height="32px"
        />
        <Title>모집 기본정보 입력</Title>
      </TitleContainer>
      <GridOverride>
        <Grid.Item>
          <PostSelect
            label="모집 구분"
            placeholder="프로젝트/스터디"
            value={values.postType}
            options={typeOptions}
            onChange={(value) => handleSelectValueChange("postType", value)}
          />
        </Grid.Item>
        <Grid.Item>
          <PostSelect
            label="진행 방식"
            placeholder="온라인/오프라인"
            value={values.progressType}
            options={progressOptions}
            onChange={(value) => handleSelectValueChange("progressType", value)}
          />
        </Grid.Item>
        <Grid.Item>
          <SelectContainer>
            <FieldItem>
              <PostSelect
                label="모집 분야"
                placeholder="선택"
                value={values.recruitType}
                options={fieldOptions}
                onChange={(value) =>
                  handleSelectValueChange("recruitType", value)
                }
              />
            </FieldItem>
            <PersonnelItem>
              <PostSelect
                label="모집 인원"
                placeholder="선택"
                value={values.recruitPeopleNum}
                options={personnelOptions}
                onChange={(value) =>
                  handleSelectValueChange("recruitPeopleNum", value)
                }
              />
            </PersonnelItem>
            <IconItem>
              <AddIcon name="add" onClick={handleAddClick} />
            </IconItem>
          </SelectContainer>
          <ChipContainer marginTop="16px">
            {values.recruitmentList.map((field, index) => (
              <Chip
                color="basic"
                key={`${field.recruitType}-${index}`}
                label={`${field.recruitType}-${field.recruitPeopleNum}`}
                onDelete={handleFieldDelete}
              />
            ))}
          </ChipContainer>
        </Grid.Item>
        <Grid.Item>
          <TextInput
            width="100%"
            name="contact"
            label="연락 방법"
            value={values.contactInfo}
            onChange={handleChange("contactInfo")}
          />
        </Grid.Item>
        <Grid.Item></Grid.Item>
        <Grid.Item>
          <ChipContainer marginBottom="16px">
            {values.skillIds?.map((value, index) => {
              return (
                <StyledChip
                  key={`${value.name}-${index}`}
                  color="basic"
                  onDelete={handleDelete}
                  label={value.name}
                />
              );
            })}
          </ChipContainer>
          <Select
            isMulti
            value={values.skillIds}
            onSelect={handleSelectChange}
            onClose={handleSelectClose}
            placeholder="태그를 입력해주세요."
            onSearchInputChange={handleSearchInputChange}
            maxHeight={200}
          >
            {optionList?.length === 0 && (
              <TagNotFoundText>검색된 태그가 없습니다.</TagNotFoundText>
            )}
            {optionList?.map(({ name }, index) => (
              <Option key={`${name}-${index}`} value={name}>
                {name}
              </Option>
            ))}
          </Select>
        </Grid.Item>
      </GridOverride>
      <TitleContainer>
        <Image
          src="/moyomi_02.svg"
          alt="moyomi_02"
          width="36px"
          height="32px"
        />
        <Title>모집 소개 작성</Title>
      </TitleContainer>
      <TextInputOverride
        width="100%"
        placeholder="모집 제목을 입력해주세요."
        value={values.title}
        onChange={handleChange("title")}
      />
      <Editor editorRef={editorRef} content={values.content} />
      <ButtonContainer>
        <PostButton color="general" variants="filled">
          취소
        </PostButton>
        <PostButton type="submit" color="primary" onClick={submitForm}>
          모집 등록
        </PostButton>
      </ButtonContainer>
    </form>
  );
};

export default PostForm;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    margin-bottom: 14px;
  }
`;

const Title = styled.h2`
  margin-left: 12px;
  ${({ theme }) => theme.typography.header2};

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    ${({ theme }) => theme.typography.header3};
  }
`;

const GridOverride = styled(Grid)`
  gap: 24px 28px;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const FieldItem = styled.div`
  margin-right: 4px;
  flex: 2 2 auto;
`;

const PersonnelItem = styled.div`
  margin-right: 8px;
  flex: 1 1 auto;
`;

const IconItem = styled.div`
  margin-bottom: 8px;
`;

const AddIcon = styled(Icon)`
  cursor: pointer;
`;

const ChipContainer = styled.div<{ marginTop?: string; marginBottom?: string }>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const TextInputOverride = styled(TextInput)`
  margin-bottom: 12px;
`;

const ButtonContainer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const PostButton = styled(Button)`
  width: 180px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    width: 100%;
  }
`;

const TagNotFoundText = styled("span")`
  padding: 10px 12px;
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.black[300]};
`;

const StyledChip = styled(Chip)`
  margin-right: 4px;
`;
