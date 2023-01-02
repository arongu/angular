import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {ServersComponent} from "./servers/servers.component";
import {HomeComponent} from "./home/home.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {UserComponent} from "./users/user/user.component";
import {ServerComponent} from "./servers/server/server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuardService} from "./auth-guard.service";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  { path: 'servers', canActivate: [AuthGuardService], component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  },
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'not-found'} // wildcard this must be the last rule !!!
    /*
    To fix this behavior, you need to change the matching strategy to "full" :
    { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
    */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
