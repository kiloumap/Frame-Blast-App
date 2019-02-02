import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    {
        path: 'events',
        loadChildren: './events/events.module#EventsPageModule'
    },
    {
        path: 'teams',
        loadChildren: './teams/teams.module#TeamsPageModule'
    },
    {
        path: 'infos',
        loadChildren: './infos/infos.module#InfosPageModule'
    },
    {path: 'team', loadChildren: './team/team.module#TeamPageModule'},
    {path: 'player', loadChildren: './player/player.module#PlayerPageModule'},
    {path: 'account', loadChildren: './account/account.module#AccountPageModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
