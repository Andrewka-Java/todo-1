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
    {id: 2, title: 'Middle', color: '#7df1bf'},
    {id: 3, title: 'High', color: '#F1828D'},
    {id: 4, title: 'Very important', color: '#F1128D'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Populate a bag of bensin',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('06/29/2021')
    },
    {
      id: 2,
      title: 'Stand up 10 times',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[5],
      date: new Date('06/30/2021')
    },
    {
      id: 3,
      title: 'Find tickets in Turkey',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 4,
      title: 'Go to a park with the family',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[2],
      date: new Date('06/28/2020')
    },
    {
      id: 5,
      title: 'Learn a book by physik',
      completed: true,
      category: TestData.categories[1],
      priority: TestData.priorities[4],
      date: new Date()
    },
    {
      id: 6,
      title: 'To be at seminar by programming',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[1]
    },
    {
      id: 7,
      title: 'Populate a bag of bensin',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[9],
      date: new Date(),
    },
    {
      id: 8,
      title: 'Complete university',
      priority: TestData.priorities[4],
      completed: false,
      category: TestData.categories[5],
      date: new Date('10/08/2021')
    },
    {
      id: 9,
      title: 'Sleep',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 10,
      title: 'Buy ticket to the cinema',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1]
    },
    {
      id: 11,
      title: 'Read the book',
      completed: true,
      category: TestData.categories[2],
      priority: TestData.priorities[3],
      date: new Date()
    },
    {
      id: 12,
      title: 'Make thr table',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[1]
    },
  ];


}
