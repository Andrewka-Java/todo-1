import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Work'},
    {id: 2, title: 'Family'},
    {id: 3, title: 'Study'},
    {id: 4, title: 'Rest'},
    {id: 5, title: 'Sport'},
    {id: 6, title: 'Food'},
    {id: 7, title: 'Finances'},
    {id: 8, title: 'Gadjets'},
    {id: 9, title: 'Health'},
    {id: 10, title: 'Car'},

  ];


  static priorities: Priority[] = [
    {id: 1, title: 'Little', color: '#e5e5e5'},
    {id: 2, title: 'Middle', color: '#85D1B2'},
    {id: 3, title: 'High', color: '#F1828D'},
    {id: 4, title: 'Very important', color: '#F1128D'},
  ];


  static tasks: Task[] = [
    {
      id: 1,
      title: 'Populate a bag of bensin',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9]
    },
    {
      id: 2,
      title: 'Stand up 10 times',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5]
    },
    {
      id: 3,
      title: 'Find tickets in Terkey',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 4,
      title: 'Go to a park with the family',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 5,
      title: 'Learn a book by physik',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'To be at seminar by programming',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2]
    },
  ];


}
