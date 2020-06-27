import {PriorityDao} from '../interface/PriorityDao';
import {Observable} from 'rxjs';

export class PriorityDaoArray implements PriorityDao {
  add(T): Observable<PriorityDao> {
    return undefined;
  }

  delete(id: number): Observable<PriorityDao> {
    return undefined;
  }

  get(id: number): Observable<PriorityDao> {
    return undefined;
  }

  getAll(): Observable<PriorityDao[]> {
    return undefined;
  }

  update(T): Observable<PriorityDao> {
    return undefined;
  }

}
