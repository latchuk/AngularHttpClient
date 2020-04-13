import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../models/postagem.model';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  constructor(private http: HttpClient) { }

  salvar(novaPostagem: Postagem) {
    this.http.post('http://localhost:3000/postagens', novaPostagem).subscribe();
  }

}
