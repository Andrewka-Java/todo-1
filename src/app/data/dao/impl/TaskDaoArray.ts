import {TaskDao} from '../interface/TaskDao';
import {Observable, of} from 'rxjs';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';
import {Task} from '../../../model/Task';
import {TestData} from '../../TestData';

export class TaskDaoArray implements TaskDao {

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  get(id: number): Observable<Task> {
    return of(TestData.tasks.find(todo => todo.id === id));
  }

  add(task: Task): Observable<Task> {
    if (task.id === null || task.id === 0){
      task.id = this.getLastIdTask();
    }

    TestData.tasks.push(task);

    return of(task);
  }

  private getLastIdTask(): number {
    return Math.max.apply(Math, TestData.tasks.map(task => task.id)) + 1;
  }



  delete(id: number): Observable<Task> {

    const taskTmp = TestData.tasks.find(t => t.id === id);
    TestData.tasks.splice(TestData.tasks.indexOf(taskTmp), 1);

    return of(taskTmp);
  }

  getCompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getTotalCount(): Observable<number> {
    return undefined;
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return of(this.searchTodos(category, searchText, status, priority));
  }

  private searchTodos(category: Category, searchText: string, status: boolean, priority: Priority): Task[] {

    let allTasks = TestData.tasks;

    if (status != null) {
      allTasks = allTasks.filter(task => task.completed === status);
    }

    if (category != null) {
      allTasks = allTasks.filter(todo => todo.category === category);
    }

    if (priority != null) {
      allTasks = allTasks.filter(task => task.priority === priority);
    }

    if (searchText != null) {
      allTasks = allTasks.filter(
        task =>
          task.title.toUpperCase().includes(searchText.toUpperCase())
      );
    }

    return allTasks;
  }

  update(task: Task): Observable<Task> {
    const taskTmp = TestData.tasks.find(t => t.id === task.id);
    TestData.tasks.splice(TestData.tasks.indexOf(taskTmp), 1, task);

    return of(task);
  }

}
