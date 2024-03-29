export interface SpeechHookProps {
  voiceValue: string;
  meetingSpeakingList: string[];
}

export const speechHooks = (state: SpeechHookProps) => {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  // 인스턴스 생성
  const recognition = new window.SpeechRecognition();
  // SpeechRecognition 관련 설정
  recognition.interimResults = true;
  recognition.lang = "ko-KR";
  recognition.continuous = true;
  recognition.maxAlternatives = 1;

  // 이벤트 리스너
  recognition.addEventListener("result", (e: any) => {
    // console.log(e.results, 'e')
    let interimTranscript = "";
    if (typeof e.results === "undefined") {
      recognition.onend = null;
      recognition.stop();
      return;
    }

    for (let i = 0; i < e.results.length; i++) {
      const transcript = e.results[i][0].transcript;
      if (e.results[i].isFinal) {
        state.voiceValue = transcript;
      } else {
        interimTranscript += transcript;
      }
    }

    if (e.results[e.results.length - 1].isFinal) {
      const transcript = e.results[e.results.length - 1][0].transcript;
      state.meetingSpeakingList = [...state.meetingSpeakingList, transcript];
      state.voiceValue = "";
    }

    if (interimTranscript) {
      state.voiceValue = interimTranscript;
    }
  });
  recognition.start();
};
