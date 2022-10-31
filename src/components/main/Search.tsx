import { Chip, Icon, SearchInput, Switch } from "jci-moyeo-design-system";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const skills = [
  {
    value: "Javascript",
    label: "Javascript",
  },
  {
    value: "TypeScript",
    label: "TypeScript",
  },
  {
    value: "React",
    label: "React",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Java",
    label: "Java",
  },
  {
    value: "Spring",
    label: "Spring",
  },
  {
    value: "Nodejs",
    label: "Nodejs",
  },
];

export const Search = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [checked, setChecked] = useState(true);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleChange = useCallback(
    (value: boolean) => {
      setChecked(value);
    },
    [setChecked],
  );

  const handleSelect = useCallback(
    (value: string) => {
      if (selectedSkills?.includes(value)) {
        return setSelectedSkills(selectedSkills?.filter((x) => x !== value));
      }

      return setSelectedSkills(selectedSkills?.concat(value));
    },
    [selectedSkills, setSelectedSkills],
  );

  const isSelected = useCallback(
    (value: string) => {
      return selectedSkills?.includes(value);
    },
    [selectedSkills],
  );

  const handleDelete = (
    e: React.MouseEvent<HTMLDivElement>,
    label?: string,
  ) => {
    const value = skills?.find((skill) => skill.label === label)?.value;
    setSelectedSkills(selectedSkills?.filter((x) => x !== value));
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <MobileSearchContainer>
        <SearchInput width="224px" placeholder="프로젝트 검색하기" />
        <Switch
          checked={checked}
          onChange={handleChange}
          label={{ on: "모집중", off: "전체" }}
          align="left"
        />
      </MobileSearchContainer>

      <PcSearchContainer>
        <SearchInput width="432px" placeholder="프로젝트 검색하기" />
        <FilterContainer>
          <SkillChipContainer>
            <StyledIcon name="filter" size={25} />
            {skills.map(({ value, label }) => {
              return (
                <StyledChipContainer key={value}>
                  <Chip
                    color={isSelected(value) ? "active" : "basic"}
                    onClick={() => handleSelect(value)}
                    onDelete={handleDelete}
                    label={label}
                    deleteIcon={
                      isSelected(value) && (
                        <Icon name="cancelWithCircle" size={16} />
                      )
                    }
                  />
                </StyledChipContainer>
              );
            })}
          </SkillChipContainer>
          <Switch
            checked={checked}
            onChange={handleChange}
            label={{ on: "모집 중만 볼래요", off: "전체를 볼래요" }}
            align="left"
          />
        </FilterContainer>
      </PcSearchContainer>
    </>
  );
};

const MobileSearchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    display: none;
  }
`;

const PcSearchContainer = styled("div")`
  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    display: none;
  }
`;

const StyledChipContainer = styled("div")`
  margin-right: 8px;
  cursor: pointer;
`;

const SkillChipContainer = styled("div")`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  margin-right: 12px;
`;

const FilterContainer = styled("div")`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;
