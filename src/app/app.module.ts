import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { MenuCreatorComponent } from './menu-creator/menu-creator.component';
import { OptionMenuComponent } from './menu-creator/option-menu/option-menu.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DaysService } from './menu-creator/days.service';
import { RecipeService } from './recipes/recipe.service';
import { FooterComponent } from './footer/footer.component';
import { EmptyMealComponent } from './menu-creator/empty-meal/empty-meal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DtataStorageService } from './shared/data-storage.service';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthGuard } from './auth/auth-guard';
import { CustomDatePipe } from './menu-creator/custom.datepipe';
import { DaysListComponent } from './menu-creator/days-list/days-list.component';

registerLocaleData(localePl, 'pl');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    MenuCreatorComponent,
    OptionMenuComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    FooterComponent,
    EmptyMealComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    CustomDatePipe,
    DaysListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    DaysService,
    RecipeService,
    DtataStorageService,
    RecipesResolverService,
    AuthService,
    AuthGuard,
    { provide: LOCALE_ID, useValue: "pl" },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
