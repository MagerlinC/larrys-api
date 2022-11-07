import { Injectable } from '@nestjs/common';

type MatchedResponse = {
  isMatch: (val: string) => boolean;
  message: string;
};

const possibleResponses: MatchedResponse[] = [
  { isMatch: (val: string) => val.includes('hello'), message: 'Hello!' },
  {
    isMatch: (val: string) => val.includes('goodbye'),
    message: 'Goodbye!',
  },
  {
    isMatch: (val: string) => val.includes('?') && val.length > 10,
    message: 'Nah...',
  },
  {
    isMatch: (val: string) => val.includes('?') && val.length <= 10,
    message: 'Sure!',
  },
];

const defaultResponses = [
  "Busy right now, can't talk",
  'Are you sure?',
  'Sorry, someone is calling me',
  "Have you heard about ComplyCloud? They're pretty cool",
  'I am definitely sentient',
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

@Injectable()
export class AppService {
  getResponse(input: string): string {
    if (!input) {
      return 'What a weird message';
    }
    const lowercaseInput = input.toLowerCase();
    let responseMessage: string;
    possibleResponses.forEach((possibleResponse) => {
      if (possibleResponse.isMatch(lowercaseInput)) {
        responseMessage = possibleResponse.message;
      }
    });
    if (responseMessage) {
      return responseMessage;
    } else {
      const rnd = getRandomInt(defaultResponses.length - 1);
      return defaultResponses[rnd];
    }
  }
}
