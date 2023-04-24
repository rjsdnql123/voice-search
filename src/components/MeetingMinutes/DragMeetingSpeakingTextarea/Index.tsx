import { component$ } from "@builder.io/qwik";
import type { DragMeetingSpeakingTextareaProps } from "./DragMeetingSpeakingTextarea.type";
import { DragMeetingSpeakingTextareaWrapper } from "./style.css";

const DragMeetingSpeakingTextarea = component$(
  (props: DragMeetingSpeakingTextareaProps) => {
    const { dragSelectResult } = props;
    return (
      <div>
        <input type="text" value={dragSelectResult.value}></input>
      </div>
    );
  }
);

export default DragMeetingSpeakingTextarea;
