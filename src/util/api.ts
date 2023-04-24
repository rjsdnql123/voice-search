import axios from "axios";

const apiKey = "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";

const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

const data = {
  prompt: "How are you?",
  model: "text-davinci-003",
  max_tokens: 1000,
  temperature: 0,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
};

const questionChatGPT = async (value: string) => {
  const params = { ...data, prompt: value };
  try {
    const result = await client.post(
      "https://api.openai.com/v1/completions",
      params
    );
    return result.data.choices;
  } catch (err) {
    console.log(err);
  }
};

export default questionChatGPT;
