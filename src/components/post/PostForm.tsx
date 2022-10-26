import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styled from "styled-components";
import { useFormik } from "formik";
import { Button, Chip, Icon, TextInput } from "jci-moyeo-design-system";
import { Grid } from "components/common/Grid";
import PostSelect from "./PostSelect";
import {
  fieldOptions,
  personnelOptions,
  progressOptions,
  typeOptions,
} from "./SelectOptions";
import { SkillSelect } from "components/common/SkillSelect";

const Editor = dynamic(() => import("./Editor"), {
  ssr: false,
});

interface PostValues {
  type: string;
  progress: string;
  field: string;
  personnel: string;
  fields: string[];
  contact: string;
  skills: string[];
}

const PostForm = () => {
  const { values, setFieldValue, handleSubmit, handleChange } =
    useFormik<PostValues>({
      initialValues: {
        type: "",
        progress: "",
        field: "",
        personnel: "",
        fields: [],
        contact: "",
        skills: [],
      },
      onSubmit: () => {
        console.log("onSubmit");
      },
    });

  const handleSelectChange = useCallback(
    (field: string, value: string) => {
      setFieldValue(field, value);
    },
    [setFieldValue],
  );

  const handleAddClick = useCallback(() => {
    if (values.field === "" || values.personnel === "") return;

    const { field, personnel, fields } = values;
    const newField = `${field} ${personnel}`;

    if (fields.includes(newField)) return;

    setFieldValue("fields", [...fields, newField]);
  }, [values, setFieldValue]);

  const handleFieldDelete = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, label?: string) => {
      const { fields } = values;

      setFieldValue(
        "fields",
        fields.filter((field) => field !== label),
      );
    },
    [values, setFieldValue],
  );

  const handleSkillSelect = useCallback(
    (value: string) => {
      const { skills } = values;
      const isInclude = skills.includes(value);

      if (isInclude) {
        return setFieldValue(
          "skills",
          skills.filter((skill) => skill !== value),
        );
      }

      setFieldValue("skills", skills.concat(value));
    },
    [values, setFieldValue],
  );

  const handleSkillDelete = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, label?: string) => {
      const { skills } = values;
      setFieldValue(
        "skills",
        skills.filter((skill) => skill !== label),
      );
    },
    [values, setFieldValue],
  );

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
            value={values.type}
            options={typeOptions}
            onChange={(value) => handleSelectChange("type", value)}
          />
        </Grid.Item>
        <Grid.Item>
          <PostSelect
            label="진행 방식"
            placeholder="온라인/오프라인"
            value={values.progress}
            options={progressOptions}
            onChange={(value) => handleSelectChange("progress", value)}
          />
        </Grid.Item>
        <Grid.Item>
          <SelectContainer>
            <FieldItem>
              <PostSelect
                label="모집 분야"
                placeholder="선택"
                value={values.field}
                options={fieldOptions}
                onChange={(value) => handleSelectChange("field", value)}
              />
            </FieldItem>
            <PersonnelItem>
              <PostSelect
                label="모집 인원"
                placeholder="선택"
                value={values.personnel}
                options={personnelOptions}
                onChange={(value) => handleSelectChange("personnel", value)}
              />
            </PersonnelItem>
            <IconItem>
              <AddIcon name="add" onClick={handleAddClick} />
            </IconItem>
          </SelectContainer>
          <ChipContainer marginTop="16px">
            {values.fields.map((field) => (
              <Chip
                color="basic"
                key={field}
                label={field}
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
            value={values.contact}
            onChange={handleChange}
          />
        </Grid.Item>
        <Grid.Item></Grid.Item>
        <Grid.Item>
          <ChipContainer marginBottom="16px">
            {values.skills.map((skill) => (
              <Chip
                color="basic"
                key={skill}
                label={skill}
                onDelete={handleSkillDelete}
              />
            ))}
          </ChipContainer>
          <SkillSelect
            label="기술 태그"
            value={values.skills}
            onSelect={handleSkillSelect}
          />
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
      <TextInputOverride width="100%" placeholder="모집 제목을 입력해주세요." />
      <Editor />
      <ButtonContainer>
        <PostButton color="general" variants="filled">
          취소
        </PostButton>
        <PostButton type="submit" color="primary">
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
