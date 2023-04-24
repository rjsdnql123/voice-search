import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MeetingMinutes } from "~/components/MeetingMinutes/Index";

export default component$(() => {
  const jsx = useSignal(<div>gd</div>);
  return (
    <div>
      {jsx.value}
      <MeetingMinutes />
    </div>
  );
});

export const head: DocumentHead = {
  title: "voice-search",
  meta: [
    {
      name: "voice-search",
      content: "말하고 듣는",
    },
  ],
};
