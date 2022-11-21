import React, { memo, useCallback, useState } from "react";
import { Select } from "jci-moyeo-design-system";
import { SelectProps } from "jci-moyeo-design-system/dist/types/components/Select";
import styled from "styled-components";

const options = [
  {
    id: 1,
    value: "javascript",
    label: "javascript",
  },
  {
    id: 2,
    value: "typescript",
    label: "typescript",
  },
  {
    id: 3,
    value: "react",
    label: "react",
  },
];

export type SkillSelectProps = SelectProps;

// eslint-disable-next-line react/display-name
export const SkillSelect = memo((props: SkillSelectProps) => {
  const [skillOptions, setSkillOptions] = useState(options);

  const handleClose = useCallback(() => {
    setSkillOptions(options);
  }, []);

  const handleSearchInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim();

      if (!value) {
        return setSkillOptions(options);
      }

      setSkillOptions(options.filter(({ label }) => label.includes(value)));
    },
    [],
  );

  return (
    <Select
      isMulti
      placeholder="태그를 입력해주세요."
      onClose={handleClose}
      onSearchInputChange={handleSearchInputChange}
      {...props}
    >
      {skillOptions.length > 0 ? (
        skillOptions.map(({ value, label }) => (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        ))
      ) : (
        <TagNotFoundText>검색된 태그가 없습니다.</TagNotFoundText>
      )}
    </Select>
  );
});

const TagNotFoundText = styled("span")`
  padding: 10px 12px;
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.black[300]};
`;
