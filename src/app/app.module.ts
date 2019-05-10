import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './admin/inc/header/header.component';
import { AddQuestComponent } from './admin/quest/add-quest/add-quest.component';
import { EditQuestComponent } from './admin/quest/edit-quest/edit-quest.component';
import { ShowQuestComponent } from './admin/quest/show-quest/show-quest.component';
import { AddVocabComponent } from './admin/vocab/add-vocab/add-vocab.component';
import { EditVocabComponent } from './admin/vocab/edit-vocab/edit-vocab.component';
import { ShowVocabComponent } from './admin/vocab/show-vocab/show-vocab.component';
import { ShowGrammerComponent } from './admin/grammer/show-grammer/show-grammer.component';
import { AddGrammerComponent } from './admin/grammer/add-grammer/add-grammer.component';
import { EditGrammerComponent } from './admin/grammer/edit-grammer/edit-grammer.component';
import { ShowUserComponent } from './admin/user/show-user/show-user.component';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import { ShowCommentComponent } from './admin/comment/show-comment/show-comment.component';
import { ShowCommentDetailComponent } from './admin/comment/show-comment-detail/show-comment-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponentComponent } from './admin/not-found-component/not-found-component.component';
import { ShowtagComponent } from './admin/tag/tag/showtag/showtag.component';
import { EditTagComponent } from './admin/tag/tag/edit-tag/edit-tag.component';
import { AddTagComponent } from './admin/tag/tag/add-tag/add-tag.component';
import { ShowCatComponent } from './admin/cat/show-cat/show-cat.component';
import { EditCatComponent } from './admin/cat/edit-cat/edit-cat.component';
import { AddCatComponent } from './admin/cat/add-cat/add-cat.component';
import { ShowFeedbackComponent } from './admin/feedback/show-feedback/show-feedback.component';
import { LoginComponent } from './admin/login/login.component';
import { CategoryComponent } from './admin/category/category.component';
import { AccountService } from './_services/account.service';
import { ProfileComponent } from './admin/profile/profile.component';
import { ShowCatChildComponent } from './admin/cat/show-cat-child/show-cat-child.component';
import { EditCatChildComponent } from './admin/cat/edit-cat-child/edit-cat-child.component';
import { AddCatChildComponent } from './admin/cat/add-cat-child/add-cat-child.component';
import { ShowChildComponent } from './admin/cat/show-child/show-child.component';
import { AddChildComponent } from './admin/cat/add-child/add-child.component';
import { EditChildComponent } from './admin/cat/edit-child/edit-child.component';
import { SearchVocabComponent } from './admin/vocab/search-vocab/search-vocab.component';

const routes: Routes = [
  { path: "", component: AdminComponent },
  { path: "", component: HeaderComponent },
  { path: "quest", component: ShowQuestComponent },
  { path: "quest/add", component: AddQuestComponent },
  { path: "quest/edit/:id", component: EditQuestComponent },
  { path: "admin" , component : ProfileComponent},
  { path: "grammar/edit", component: EditGrammerComponent },
  { path: "post", component: ShowCommentComponent },
  { path: "comment/:id", component: ShowCommentDetailComponent },
  { path: "user", component: ShowUserComponent },
  { path: "user/add", component: AddUserComponent },
  { path: "user/edit", component: EditUserComponent },
  { path: "tag", component: ShowtagComponent },
  { path: "tag/edit/:id", component: EditTagComponent },
  { path: "tag/add", component: AddTagComponent },
  { path: "login",component : LoginComponent},
  { path: "category" , component : ShowCatComponent},
  { path: "category/add" , component : AddCatComponent},
  { path: "category/edit/:id" , component : EditCatComponent},
  { path: "category/:id" , component : ShowCatChildComponent},
  { path: "category/:id/add" , component : AddCatChildComponent},
  { path: "category/:id/edit/:idchild" , component : EditCatChildComponent},
  { path: "category/:id/:id1" , component : ShowChildComponent},
  { path: "category/:id/:id1/edit/:id2" , component : EditChildComponent},
  { path: "category/:id/:id1/add" , component : AddChildComponent},
  { path: ":name" , component : CategoryComponent},
  { path: ":name/:name/vocab/:id/add", component: AddVocabComponent },
  { path: ":name/:name/vocab/:id/search", component: SearchVocabComponent },
  { path: ":name/:name/vocab/:id/edit/:idword", component: EditVocabComponent },
  { path: ":name/:name/vocab/:id", component: ShowVocabComponent },
  { path: ":name/:name/grammar/:id", component: ShowGrammerComponent },
  { path: ":name/:name/grammar/:id/add", component: AddGrammerComponent },
  { path: ":name/:name/grammar/:id/edit/:idgrammar", component: EditGrammerComponent },
  { path: "**", component : NotFoundComponentComponent },
  
];


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    AddQuestComponent,
    EditQuestComponent,
    ShowQuestComponent,
    AddVocabComponent,
    EditVocabComponent,
    ShowVocabComponent,
    ShowGrammerComponent,
    AddGrammerComponent,
    EditGrammerComponent,
    ShowUserComponent,
    EditUserComponent,
    AddUserComponent,
    ShowCommentComponent,
    ShowCommentDetailComponent,
    NotFoundComponentComponent,
    ShowtagComponent,
    EditTagComponent,
    AddTagComponent,
    ShowCatComponent,
    EditCatComponent,
    AddCatComponent,
    ShowFeedbackComponent,
    LoginComponent,
    CategoryComponent,
    ProfileComponent,
    ShowCatChildComponent,
    EditCatChildComponent,
    AddCatChildComponent,
    ShowChildComponent,
    AddChildComponent,
    EditChildComponent,
    SearchVocabComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
