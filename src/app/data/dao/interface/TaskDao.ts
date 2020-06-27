import {CommonDao} from './CommonDao';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';
import {Observable} from 'rxjs';
import { Task } from 'src/app/model/Task';

export interface TaskDao extends CommonDao<Task>{
  //null-value is not using in search
  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>

  getCompletedCountInCategory(category: Category): Observable<number>;

  getUncompletedCountInCategory(category: Category): Observable<number>;

  getTotalCountInCategory(category: Category): Observable<number>;

  getTotalCount(): Observable<number>;
}
