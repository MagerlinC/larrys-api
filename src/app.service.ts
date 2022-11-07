import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getResponse(input: string): string {
    const lowercaseInput = input.toLowerCase();
    if (lowercaseInput.includes('?')) {
      return lowercaseInput.length > 10 ? 'Nah...' : 'Sure!';
    } else {
      switch (lowercaseInput) {
        case 'hello':
          return 'Hello';
        case 'goodbye':
          return 'Goodbye!';
        default:
          return "Busy right now, can't talk";
      }
    }
  }
}
