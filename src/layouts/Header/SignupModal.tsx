import React, { useState } from "react";
import {
  Button,
  Icon,
  Modal,
  Select,
  TextInput,
} from "jci-moyeo-design-system";
import styled, { css } from "styled-components";

const SignupModal = () => {
  const MAX_STEP = 2;
  const [signupStep, setSignupStep] = useState<number>(1);

  const handleNextStep = () => {
    if (MAX_STEP !== signupStep) {
      setSignupStep((oldStep) => oldStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (signupStep > 1) {
      setSignupStep((oldStep) => oldStep - 1);
    }
  };

  const titleList = ["모여에 오신 걸 환영해요!", `안녕하세요 ${"test"}님,`];
  const descriptionList = [
    "닉네임을 설정해볼까요?",
    "어떤 언어, 프레임 워크에 관심이 있나요?",
  ];

  return (
    <SignupModalContent>
      <Button variants="text" onClick={handlePrevStep}>
        <StepMoveIcon isActive={signupStep > 1} size={36} name="arrowLeft" />
      </Button>
      <StepBox>
        <StepperBox>
          {[...Array(MAX_STEP)].map((_, i) => (
            <span
              role="button"
              key={`step-${i}`}
              {...(i + 1 === signupStep && { className: "active" })}
              onClick={() => setSignupStep(i + 1)}
            />
          ))}
        </StepperBox>
        <TitleBox>
          <Title>{titleList[signupStep - 1]}</Title>
          <Description>{descriptionList[signupStep - 1]}</Description>
        </TitleBox>
        <form>
          <StepContent isActive={signupStep === 1}>
            <TextInput
              message="한영, 최대 10글자 이내, 공백 특수문자 불가"
              placeholder="placeholder"
              value=""
              width="100%"
            />
          </StepContent>
          <StepContent isActive={signupStep === 2}>
            <Select
              label="기술 태그"
              value={["javascript"]}
              placeholder="태그를 입력해주세요."
              isMulti
            >
              {[
                {
                  value: "javascript",
                  label: '"javascript"',
                },
                {
                  value: "typescript",
                  label: '"typescript"',
                },
                {
                  value: "react",
                  label: '"react"',
                },
              ].map(({ value, label }) => (
                <Select.Option key={value} value={value}>
                  {label}
                </Select.Option>
              ))}
            </Select>
          </StepContent>
        </form>
      </StepBox>
      <Button variants="text" onClick={handleNextStep}>
        <StepMoveIcon
          isActive={MAX_STEP !== signupStep}
          size={36}
          name="arrowRight"
        />
      </Button>
    </SignupModalContent>
  );
};

const SignupModalContent = styled(Modal.Content)`
  height: 344px;
  padding: 48px 28px 56px 28px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 96px;
`;

const StepMoveIcon = styled(Icon)<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary["500"] : theme.colors.general["600"]};
`;

const StepBox = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  row-gap: 52px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  text-align: center;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.header2};
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.colors.black["300"]};
`;

const StepperBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 8px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.primary.disabled};
    cursor: pointer;

    &.active {
      background-color: ${({ theme }) => theme.colors.primary["500"]};
    }
  }
`;

const StepContent = styled.div<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

export default SignupModal;
