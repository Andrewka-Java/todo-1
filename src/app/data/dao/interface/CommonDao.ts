import {Observable} from 'rxjs';

//Observable is using for async and reactive style
export interface CommonDao<T> {
  add(T): Observable<T>;
  get(id: number): Observable<T>;
  delete(id: number): Observable<T>;
  update(T): Observable<T>;
  getAll(): Observable<T[]>;
}
