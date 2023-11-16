import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPageComponent } from '@modules/tracks/pages/tracks-page/tracks-page.component';
import { FavoritePageComponent } from '@modules/favorites/pages/favorite-page/favorite-page.component';
import { HistoryPageComponent } from '@modules/history/pages/history-page/history-page.component';

const routes: Routes = [
    {
        path: 'tracks',
        component: TracksPageComponent,
        loadChildren:() => import(`@modules/tracks/tracks.module`).then(m => m.TracksModule)
    },
    {
        path: 'favorites',
        component: FavoritePageComponent,
        loadChildren:() => import(`@modules/favorites/favorites.module`).then(m => m.FavoritesModule)
    },
    {
        path: 'history',
        component: HistoryPageComponent,
        loadChildren:() => import(`@modules/history/history.module`).then(m => m.HistoryModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
