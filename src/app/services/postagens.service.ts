import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../models/postagem.model';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  produtos: string[] = ['produto 1', 'produto 2'];

  constructor(private http: HttpClient) { }

  async salvar(novaPostagem: Postagem): Promise<Postagem> {
    return this.http.post<Postagem>('http://localhost:3000/postagens', novaPostagem).toPromise();
  }

  async retornarPostagens(): Promise<Postagem[]> {
    return this.http.get<Postagem[]>('http://localhost:3000/postagens').toPromise();
  }

  async retornarPostagem(id: number): Promise<Postagem> {
    return this.http.get<Postagem>('http://localhost:3000/postagens/' + id).toPromise();
  }

}
