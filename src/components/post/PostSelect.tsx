import React, { memo } from "react";
import { Select } from "jci-moyeo-design-system";
import { SelectProps } from "jci-moyeo-design-system/dist/types/components/Select";

export interface Option {
  id: number;
  value: string;
  label: string;
}

export interface PostSelectProps extends Omit<SelectProps, "children"> {
  options: Option[];
}

const PostSelect = ({ options, ...rest }: PostSelectProps) => {
  return (
    <Select {...rest}>
      {options.map(({ id, value, label }) => (
        <Select.Option key={id} value={value}>
          {label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default memo(PostSelect);
