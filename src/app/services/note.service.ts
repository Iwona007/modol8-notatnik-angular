import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NoteBook} from '../app.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) {
  }


  getAll(): Observable<Array<NoteBook>> {
    return this.httpClient.get<Array<NoteBook>>('http://localhost:8080/notice');
  }

  getById(id: number): Observable<NoteBook> {
    return this.httpClient.get<NoteBook>('http://localhost:8080/notice/' + id);
  }


  addNoteBook(noteBook: NoteBook): Observable<NoteBook> {
    return this.httpClient.post<NoteBook>('http://localhost:8080/notice/new', noteBook);
  }

  editNotice(noteBook: NoteBook): Observable<NoteBook> {
    return this.httpClient.put<NoteBook>('http://localhost:8080/notice/edit/' + noteBook.id, noteBook);
  }

  changeText(noteBook: NoteBook): Observable<NoteBook> {
 return this.httpClient.patch('http://localhost:8080/notice/text/' + noteBook.id, noteBook);

  }

  deleteById(id: number): Observable<NoteBook> {
    return this.httpClient.delete<NoteBook>('http://localhost:8080/notice/' + id);
  }


}
