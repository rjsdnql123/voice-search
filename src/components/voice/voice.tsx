import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { speechHooks } from '~/util/speech.hooks';
import { Answer } from './answer/anwer';
import { Question } from './question/question';

export const VoiceOpenAi = component$(() => {

  const state = useStore({
    count: 0,
    voiceValue : ''
  });
  
  useClientEffect$(() => {
    speechHooks(state);
  });

  

  return (
      <div>
        <div>오픈 api를 이용해 마이크로 질문을 할 수가 있습니다.</div>
        <div>
        <Question question={state.voiceValue} />
        <Answer/>
        </div>
      </div>
  );
});

   // const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    // const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
    // const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

    // console.log(response)
    
    // const interval = setInterval(() => {
    //   asdf(state.voiceValue)
    // }, 2000);
    // return () => clearInterval(interval);
