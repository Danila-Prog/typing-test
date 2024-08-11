import axios from 'axios';

export const getText = async(sentences: string) => {
  const response = await axios.get<string>('https://baconipsum.com/api/', {
    params: {
      type: 'all-meat',
      sentences,
      format: 'text'
    }
  });
  return response
}