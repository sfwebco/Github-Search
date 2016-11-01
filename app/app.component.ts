import { Component } from '@angular/core';
import {GithubService} from './services/github.service';
@Component({
    selector: 'my-app',
    template: `
	<nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Github Search</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    		<div class="container"><profile></profile></div>`,
    providers: [GithubService]
})
export class AppComponent { }
