import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { VoiceOpenAi } from '~/components/voice/voice';

// declare global {
//   type window = any;
//   interface Window {
//     SpeechRecognition: any;
//     webkitSpeechRecognition: any;
//   }
// }

export default component$(() => {


  return (
    <div>
      <VoiceOpenAi/>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'voice-search',
  meta: [
    {
      name: 'voice-search',
      content: '말하고 듣는',
    },
  ],
};


// 오픈 ai를 사용해서 speek 