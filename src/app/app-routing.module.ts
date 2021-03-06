import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { MenuCreatorComponent } from './menu-creator/menu-creator.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth-guard';
import { ModeResolverService } from './recipes/mode-resolver.service';

const appRoutes: Routes = [
    { 
        path: '', 
        redirectTo: '/menu-creator', 
        pathMatch: 'full' 
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        resolve: [ModeResolverService],
        canActivate: [AuthGuard],
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
            { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
        ]
    },
    {
        path: 'menu-creator',
        component: MenuCreatorComponent,
        resolve: [ModeResolverService],
        canActivate: [AuthGuard],
        children:[
            { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },

        ]
    },
    { 
        path: 'auth', 
        component: AuthComponent 
    },
    {
        path:'**',
        redirectTo:'/auth',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}