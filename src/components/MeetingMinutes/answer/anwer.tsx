import { component$ } from "@builder.io/qwik";
import type { IAnswerPropsType } from "./answer.type";

export const Answer = component$((props: { aiAnswer: IAnswerPropsType[] }) => {
  const { aiAnswer } = props;
  return (
    <div>
      <h1>Open Ai 답변</h1>
      <div>답변 작성</div>
      <div>
        {aiAnswer.map((res: IAnswerPropsType) => {
          return <div>{res.text}</div>;
        })}
      </div>
    </div>
  );
});

// 말이 끊기면 처음부터
