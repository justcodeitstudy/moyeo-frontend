import React, { memo, useRef } from "react";
import { Viewer as TuiViewer } from "@toast-ui/react-editor";

import "@toast-ui/editor/dist/toastui-editor.css";

// TODO: 샘플 데이터 추후 제거 예정
const initialValue = `<div><h3>안녕하세요, 같이 화면 공유하면서 모각코 진행하실 분을 모집합니다. 😊</h3><blockquote><p>👤&nbsp;대상 : 프론트엔드 개발자 취업이 목표이신 분</p><p>💬&nbsp;내용 : 각자 모여서 코딩 관련 스터디 진행 (화면 공유 필수)</p><p>💻&nbsp;장소 : 개더타운</p><p>⏰&nbsp;일시 : 평일 오전 10시~오후 6시 (조율 가능)</p></blockquote><h3>✅ 원활한 스터디 진행을 위한 벌금 및 퇴출 제도가 있습니다.</h3><ul><li><p>지각 3회(지각 기준은 시작 시각 10분 이후입니다.) → 결석 1회 (기프티콘)</p><ul><li><p>특정 사유가 있어 불참할 경우는 결석에서 제외합니다.</p></li></ul></li><li><p>사유 없이 결석 3회가 누적될 시, 스터디에서 <strong>퇴출</strong>합니다.</p></li></ul><hr><h2>참여하시기 전, 아래 내용을 꼭 읽어주세요!</h2><p>⭐️ <strong>프론트엔드 개발자</strong>를 희망하는 분들을 대상으로 모집하고 있습니다. 저도 프론트엔드 개발자 취업을 목표로 하고 있으며 서로에게 공부한 내용을 공유하거나, 질문을 할 수 있는 분위기가 되었으면 합니다.</p><p>⭐️ 현재 3명이 참여 중이고, 추가로 <strong>2명 </strong>더 모집할 예정입니다.</p><p>⭐️ 오프라인 계획은 없으며, <strong>온라인</strong>으로 참여하실 분만 들어와 주세요.</p><p>⭐️ 예상 스터디 기간은 <strong>최소 올해 말</strong>까지로 생각하고 있으며, 한 달 단위로 추가 진행 여부를 결정할 예정입니다.</p><p>*스터디 관련 세부 사항은 스터디원이 모이는 대로 함께 상의하려고 합니다. 관심 있으신 분들은 <strong>오픈채팅방</strong>으로 들어와서 다음과 같은 양식으로 <strong>메세지를 남겨주세요</strong>.</p><p>양식 -&gt; 현재 공부 중인 스택(언어, 프레임워크, 알고리즘 등) / 계획 중인 스터디 기간</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://open.kakao.com/o/sARnIVHe">https://open.kakao.com/o/sARnIVHe</a> (모집 마감 시 폐쇄합니다.)</p><p>&nbsp;</p></div>`;

const Viewer = () => {
  const viewerRef = useRef<TuiViewer>(null);

  return <TuiViewer ref={viewerRef} initialValue={initialValue} />;
};

export default memo(Viewer);
