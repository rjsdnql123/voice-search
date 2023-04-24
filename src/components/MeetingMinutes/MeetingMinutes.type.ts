export interface IChatGPTType {
  frequency_penalty: number;
  max_tokens: number;
  model: string;
  presence_penalty: number;
  prompt: string;
  temperature: number;
  top_p: number;
  text: string;
}

export interface IMeetPropsType {
  voiceValue: string;
  aiAnswer: IChatGPTType[];
  meetingSpeakingList: string[];
}

export type IChangeAiAnswerTYpe = (value: IChatGPTType[]) => void;
