import { Injectable } from '@nestjs/common';

type MatchedResponse = {
  isMatch: (val: string) => boolean;
  message: string;
};

const responses: MatchedResponse[] = [
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
@Injectable()
export class AppService {
  getResponse(input: string): string {
    if (!input) {
      return 'What a weird message';
    }
    const lowercaseInput = input.toLowerCase();
    let responseMessage: string;
    responses.forEach((response) => {
      if (response.isMatch(lowercaseInput)) {
        responseMessage = response.message;
      }
    });
    if (responseMessage) {
      return responseMessage;
    } else {
      return "Busy right now, can't talk";
    }
  }
}
