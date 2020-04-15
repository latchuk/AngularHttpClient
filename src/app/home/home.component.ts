import { Component, OnInit } from '@angular/core';
import { PostagensService } from '../services/postagens.service';
import { Postagem } from '../models/postagem.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postagens: Postagem[] = [];

  constructor(
    private postagensService: PostagensService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.postagens = await this.postagensService.retornarPostagens();
    this.postagens.reverse();
  }

  novaPostagem() {
    this.router.navigate(['cadastro']);
  }

  verDetalhes(postagem: Postagem) {
    this.router.navigate(['postagens', postagem.id]);
  }

}
