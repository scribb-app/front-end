import { Injectable } from '@angular/core';

let lists = [{
  name: 'work',
  items: [
    {
      label: 'todo',
      done: false,
      description: 'write unit tests'
    }
  ]
}, {
  name: 'personal',
  items: [
    {
      label: 'todo',
      done: false,
      description: 'buy groceries'
    },
    {
      label: 'todo',
      done: false,
      description: 'clean room'
    }
  ]
}];

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor() { }

  getLists() {
    return lists;
  }

}
