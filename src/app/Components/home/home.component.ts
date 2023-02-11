import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public filterText: string;
  public articles: any;

  constructor(private articleService: ArticleService, private router: Router) {
    this.articles = this.articleService.getArticles();
  }

  deleteArticle(article) {
    this.articleService.deleteArticle(article.id);
    this.articles = this.articleService.getArticles();
  }

  UpdateArticle(article) {
    this.router.navigate(['/update/',article.id]);
  }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
}
