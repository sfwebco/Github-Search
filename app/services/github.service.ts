import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id = '47eacaf9def52c978d37';
	private client_secret = '3edfc2aae779d6af2a972277cefae1f11419ad7c';

	constructor(private _http: Http){
		console.log('Github Service Ready...');
		this.username = 'sfwebco';
	}

	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json());
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json());
	}

	updateUser(username:string){
		this.username = username;
	}
}