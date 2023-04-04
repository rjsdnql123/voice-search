import {
  component$,
  useClientEffect$,
  useSignal,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import asdf from "~/util/api";
import { speechHooks } from "~/util/speech.hooks";
import { Answer } from "./answer/anwer";
import { Question } from "./question/question";

interface ASD {
  count: number;
  voiceValue: string;
  aiAnswer: any;
}

export const VoiceOpenAi = component$(() => {
  const state = useStore({
    count: 0,
    voiceValue: "",
    aiAnswer: [],
    dddddd: "",
    json: [],
  });

  useClientEffect$(() => {
    speechHooks(state);
  });

  useTask$(async ({ track }) => {
    track(() => state.voiceValue);
    // 입력이 3초 동안 안되면?

    //   const timer = setTimeout(() => {
    //     console.log('asdfdsaf')
    //     asdf(state.voiceValue).then((res:string) => {
    //       console.log(res)
    //       state.aiAnswer.push(res)
    //       state.dddddd = res
    //     })
    // }, 3000)

    // // useEffect의 리턴부에 타이머를 해제시킨다.(클린업)
    // return () => clearTimeout(timer)
  });

  return (
    <div>
      <div>질문</div>
      <div>
        <Question question={state.voiceValue} list={state.json} />
        <Answer aiAnser={state.aiAnswer} ddddd={state.dddddd} />
      </div>
    </div>
  );
});
