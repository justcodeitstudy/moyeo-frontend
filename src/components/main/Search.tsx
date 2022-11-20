import { Chip, Icon, SearchInput, Switch } from "jci-moyeo-design-system";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { removeUndefined } from "../../utils/removeUndefined";

const skills = [
  { id: 1, value: "Javascript", label: "Javascript" },
  { id: 2, value: "TypeScript", label: "TypeScript" },
  { id: 3, value: "React", label: "React" },
  { id: 4, value: "Vue", label: "Vue" },
  { id: 5, value: "Java", label: "Java" },
  { id: 6, value: "Spring", label: "Spring" },
  { id: 7, value: "Nodejs", label: "Nodejs" },
];

export const Search = () => {
  const { push, query } = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  const [checked, setChecked] = useState(true);
  const [skillIds, setSkillIds] = useState<number[]>([]);
  const [title, setTitle] = useState("");

  const handleSearchChange = useCallback((searchValue: string) => {
    setTitle(searchValue);
  }, []);

  const handleChange = useCallback(
    (value: boolean) => {
      setChecked(value);
    },
    [setChecked],
  );

  const handleSelect = useCallback(
    (id: number) => {
      if (skillIds?.includes(id)) {
        return setSkillIds(skillIds?.filter((x) => x !== id));
      }
      return setSkillIds(skillIds?.concat(id));
    },
    [skillIds],
  );

  const isSelected = useCallback(
    (id: number) => {
      return skillIds?.includes(id);
    },
    [skillIds],
  );

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>, id?: number) => {
    const skillId = skills?.find((skill) => skill.id === id)?.id;
    setSkillIds(skillIds?.filter((x) => x !== skillId));
  };

  useEffect(() => {
    push(
      {
        query: removeUndefined({
          ...query,
          title,
          skillIds,
          status: checked ? "RECRUITING" : undefined,
        }),
      },
      undefined,
      { scroll: false },
    );
  }, [checked, skillIds, title]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <MobileSearchContainer>
        <SearchInput
          width="224px"
          placeholder="프로젝트 검색하기"
          value={title}
          onSearch={handleSearchChange}
        />
        <Switch
          checked={checked}
          onChange={handleChange}
          label={{ on: "모집중", off: "전체" }}
          align="left"
        />
      </MobileSearchContainer>

      <PcSearchContainer>
        <SearchInput
          width="432px"
          placeholder="프로젝트 검색하기"
          value={title}
          onSearch={handleSearchChange}
        />
        <FilterContainer>
          <SkillChipContainer>
            <StyledIcon name="filter" size={25} />
            {skills.map(({ id, label }) => {
              return (
                <StyledChipContainer key={id}>
                  <Chip
                    color={isSelected(id) ? "active" : "basic"}
                    onClick={() => handleSelect(id)}
                    onDelete={(e) => handleDelete(e, id)}
                    label={label}
                    deleteIcon={
                      isSelected(id) && (
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
