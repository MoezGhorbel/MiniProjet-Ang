import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../ArticleModel';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  article: Article;

  constructor(private articleService: ArticleService, private router: Router) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = new FormGroup({
      title: new FormControl(''),
      subject: new FormControl(''),
      text: new FormControl('')
    });
  }

  onSubmit() {
    const article = new Article();
    let id = localStorage.getItem('articleId');
    if (id === undefined) {
      article.id = 1
      localStorage.setItem('articleId', '1')
    } else {
      article.id = Number(id) + 1
      localStorage.setItem('articleId', article.id.toString())
    }
    article.title = this.addForm.value.title;
    article.subject = this.addForm.value.subject;
    article.text = this.addForm.value.text;
    this.articleService.addArticle(article);
    this.router.navigate(['/home']);
  }

}
