import {
  component$,
  useClientEffect$,
  useStore,
  useTask$,
  $,
} from "@builder.io/qwik";
import { speechHooks } from "~/util/speech.hooks";
import { Answer } from "./answer/anwer";
import type {
  IChangeAiAnswerTYpe,
  IChatGPTType,
  IMeetPropsType,
} from "./MeetingMinutes.type";
import { MeetingSpeaking } from "./MeetingSpeaking/MeetingSpeaking";

export const MeetingMinutes = component$(() => {
  const meetingState = useStore<IMeetPropsType>({
    voiceValue: "",
    aiAnswer: [],
    meetingSpeakingList: [],
  });

  useClientEffect$(() => {
    speechHooks(meetingState);
  });

  useTask$(async ({ track }) => {
    track(() => meetingState.voiceValue);
  });

  const changeAiAnswer: IChangeAiAnswerTYpe = $((value: IChatGPTType[]) => {
    meetingState.aiAnswer = value;
  });

  return (
    <div>
      <MeetingSpeaking
        voiceValue={meetingState.voiceValue}
        meetingSpeakingList={meetingState.meetingSpeakingList}
        changeAiAnswer={changeAiAnswer}
      />
      <Answer aiAnswer={meetingState.aiAnswer} />
    </div>
  );
});
