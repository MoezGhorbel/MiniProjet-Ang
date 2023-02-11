import { Injectable } from '@angular/core';
import { Article } from './ArticleModel';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles = [];

  constructor() { }

  getArticles() {
    this.articles = JSON.parse(localStorage.getItem('articles')) || [];
    return this.articles;
  }

  addArticle(article: Article) {
    this.articles.push(article);
    this.updateLocalStorage();
  }

  updateArticle(article: any) {
    const index = this.articles.findIndex(a => a.id === article.id);
    this.articles[index] = article;
    this.updateLocalStorage();
  }

  deleteArticle(id: number) {
    this.articles = this.articles.filter(a => a.id !== id);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('articles', JSON.stringify(this.articles));

  }
}
