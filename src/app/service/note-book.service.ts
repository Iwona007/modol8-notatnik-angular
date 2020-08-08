import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NoteBook} from '../app.component';


const API_URL = 'http://localhost:8081/notice';
@Injectable({
  providedIn: 'root'
})
export class NoteBookService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Array<NoteBook>> {
    return this.httpClient.get<Array<NoteBook>>(API_URL);
  }
  getById(id: number): Observable<NoteBook> {
    return this.httpClient.get<NoteBook>(API_URL + id);
  }

  addNoteBook(noteBook: NoteBook): Observable<NoteBook> {
    return this.httpClient.post<NoteBook>(API_URL + '/new', noteBook);
  }

  changeNoteBook(noteBook: NoteBook): Observable<NoteBook> {
    return this.httpClient.put<NoteBook>(API_URL + '/edit/' + noteBook.id, noteBook);
  }

  changeNotice(noteBook: NoteBook): Observable<NoteBook> {
    return this.httpClient.patch(API_URL + '/notice/' + noteBook.id, noteBook);
  }

  deleteById(id: number): Observable<NoteBook> {
    return this.httpClient.delete<NoteBook>(API_URL + '/delete/' + id);
  }
}



