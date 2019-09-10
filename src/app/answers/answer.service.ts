import { Injectable } from '@angular/core';
import { Answer } from './model/answer.model';

@Injectable()
export class AnswerService {

  constructor() { }

  // save(answer: Answer): number {
  //   if (answer.id) {
  //     this.removeAnswer(answer.id);
  //   } else {
  //     answer.id = this.generateId();
  //   }
  //   return this.answers.push(answer);
  // }
  save(answer: Answer) {
    if (answer.id) {
      const element = this.findAnswer(answer.id);
      const index = this.answers.indexOf(element);
      this.answers[index] = answer;
    } else {
      answer.id = this.generateId();
      return this.answers.push(answer);
    }
  }
  findAnswer(id: number): Answer {
    var filtered: Answer[] = this.getAnswers().filter(ans => ans.id === id);
    console.log("Test Value : " + filtered);
    return (filtered.length > 0) ? filtered[0] : null;
  }

  removeAnswer(id: number) {
    const element = this.findAnswer(id);
    const index = this.answers.indexOf(element);
    if (index >= 0) {
      this.answers.splice(index, 1);
    }
  }

  getAnswers(): Answer[] {
    return this.answers;
  }

  private generateId(): number {
    return Math.round(Math.random() * 10000);
  }

  answers: Answer[] = [
    {
      id: 1,
      title: "string",
      image: "https://www.hdwallpaper.nu/wp-content/uploads/2015/03/The-Elder-Scrolls-Online-PC-Wallpaper.jpg",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 141,
      title: "string",
      image: "https://material.angular.io/assets/img/examples/shiba1.jpg",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    }, {
      id: 14,
      title: "string",
      image: "https://thumbs.dreamstime.com/z/pregnant-wolf-looking-up-2237782.jpg",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    }, {
      id: 41,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 143,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 123,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 132,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 231,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 311,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 321,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 31,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 13,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 21,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 12,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 11,
      title: "string",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "regex"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    },
    {
      id: 2,
      title: "string2",
      code: "my scala code;",
      description: "my description",
      tags: ["scala", "map"],
      links: [],
      createdDate: new Date(),
      modifiedDate: new Date()
    }];
}
