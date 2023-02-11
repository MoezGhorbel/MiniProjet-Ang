import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../ArticleModel';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {
  article: Article;
  updateForm: FormGroup

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.article = this.articleService.getArticles().find(a => a.id === id);

    this.updateForm = new FormGroup(
      {
        id: new FormControl(this.article.id),
        title: new FormControl(this.article.title),
        subject: new FormControl(this.article.subject),
        text: new FormControl(this.article.text)
      }
    )
  }

  Updated() {
    this.articleService.updateArticle(this.updateForm.value);
    this.router.navigate(['/home']);
  }
}
