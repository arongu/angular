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
import {CanDeactivateGuardService} from "./servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServeResolverService} from "./servers/server/serve-resolver.service";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  {
      path: 'servers',
      //canActivate: [AuthGuardService],
      canActivateChild: [AuthGuardService],
      component: ServersComponent, children: [
        { path: ':id', component: ServerComponent, resolve: {server: ServeResolverService} },
        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService] }
      ]
  },
  //{ path: 'not-found', component: PageNotFoundComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} }, // pass data with route to the component
  { path: '**', redirectTo: 'not-found'} // wildcard this must be the last rule !!!
    /*
    To fix this behavior, you need to change the matching strategy to "full" :
    { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
    */
];

@NgModule({
    // legacy hash mode for older web servers, when 404 cannot be configured to point back to the app
    //imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
