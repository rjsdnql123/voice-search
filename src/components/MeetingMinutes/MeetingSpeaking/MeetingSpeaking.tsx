import { component$, useClientEffect$, useSignal, $ } from "@builder.io/qwik";
import { MeetingSpeakingWrapper } from "./MeetingSpeaking.css";
import DragMeetingSpeakingTextarea from "../DragMeetingSpeakingTextarea/Index";
import questionChatGPT from "~/util/api";
import type { IMeetingSpeakingPropsType } from "./MeetingSpeaking.type";

export const MeetingSpeaking = component$(
  (props: IMeetingSpeakingPropsType) => {
    const { voiceValue, meetingSpeakingList, changeAiAnswer } = props;

    const isLoading = useSignal<boolean>(false);

    const dragSelectResult = useSignal("");
    const outputRef = useSignal<Element>();

    const askQuestionChatGPT = $(async () => {
      try {
        isLoading.value = true;
        const answerfromGPT = await questionChatGPT(dragSelectResult.value);
        // eslint-disable-next-line qwik/valid-lexical-scope
        changeAiAnswer(answerfromGPT);
      } catch (err) {
        console.log(err, "askQuestionGPT Error");
      } finally {
        isLoading.value = false;
      }
    });

    useClientEffect$(() => {
      function getText() {
        const selection: string = window.getSelection()?.toString() || "";
        if (window.getSelection()?.toString().length) {
          dragSelectResult.value = selection;
        }
      }

      document.addEventListener("selectionchange", getText);
    });

    return (
      <MeetingSpeakingWrapper>
        <h1>회의록</h1>
        <div ref={outputRef}>{meetingSpeakingList.join(" / ")}</div>
        <div>질문 수집 중..</div>
        <div>{voiceValue}</div>
        <input
          bind:value={dragSelectResult}
          type={"text"}
          name="dragSelectResult"
          // value={dragSelectResult.value}
        ></input>
        <DragMeetingSpeakingTextarea dragSelectResult={dragSelectResult} />
        <button disabled={isLoading.value} onClick$={askQuestionChatGPT}>
          {isLoading.value ? "chatGPT에게 질문하기" : "chatGPT에게 질문 중..."}
        </button>
      </MeetingSpeakingWrapper>
    );
  }
);
