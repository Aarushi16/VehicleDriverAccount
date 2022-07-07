// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import * as global from 'src/app/globals';
// import { environment } from 'src/environments/environment';
// import { GlobalService } from './global.service';
// import { Subject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import * as AllActiveSummary from '../../assets/data/GetAllActiveCommunicationSummary.json'
// @Injectable({
// 	providedIn: 'root'
// })

// export class DataService {


// 	auth = 'test1';
// 	GLOBAL_AUTH_KEY = 'test';

// 	constructor(private httpClient: HttpClient, private globalService: GlobalService) { }

// 	doLogin(userName, password) {
// 		const input = JSON.stringify({
// 			userName: userName,
// 			passwords: password

// 		});
// 		const httpHeaders = new HttpHeaders({
// 			'content-type': 'application/json',
// 			'cache-control': 'no-cache'

// 		});
// 		const options = {
// 			headers: httpHeaders
// 		};
// 		console.log(environment[global.env].API_URL);
// 		localStorage.setItem("Envurl", environment[global.env].API_URL);
// 		return this.httpClient.post(environment[global.env].API_URL + '/api/Common/GetUserDetails', input, options);
// 	}

// }


import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from 'src/environments/environment'



@Injectable({
	providedIn: 'root'
})
// var details: any = JSON.parse(localStorage.getItem('token'));

export class DataService {

   token: any =  JSON.parse(localStorage.getItem('token') || '{}');
//    var token = "";
// try {
  
//   var loginDetail = JSON.parse(localStorage.getItem('loginDetail'));
//   token = loginDetail.securityToken;
  
// }
// catch (err) {
//   console.log(err);
// }
  constructor(private httpClient: HttpClient,) { }

 
    doLogin(userName: string, password: string) {
		const input = JSON.stringify({
			username: userName,
			password: password

		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		// console.log(environment[global.env].API_URL);
		// localStorage.setItem("Envurl", environment[global.env].API_URL);
		return this.httpClient.post(environment.stage.API_URL + 'api/Login/SignIn', input, options);
	}

    doSignup(userName: string, password: string) {
		const input = JSON.stringify({
			username: userName,
			password: password

		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		// console.log(environment[global.env].API_URL);
		// localStorage.setItem("Envurl", environment[global.env].API_URL);
		return this.httpClient.post(environment.stage.API_URL + 'api/Login/SignUp', input, options);
	}



    getVehicleData() {
		// const input = JSON.stringify({
		// 	username: userName,
		// 	password: password

		// });
        console.log('token',this.token)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
            'Authorization': `Bearer ${this.token}`,
            // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTcxNjI1NTYsImlzcyI6ImFzaGxrYWRzMDEyIiwiYXVkIjoiYXNobGthZHMwMTIifQ.ncuz5lIbVUG37_Zvgs_z9d9STfuqCfG8E92LBZmTMUw`
		});
		const options = {
			headers: httpHeaders
		};
		// console.log(environment[global.env].API_URL);
		// localStorage.setItem("Envurl", environment[global.env].API_URL);
		return this.httpClient.get(environment.stage.API_V_URL + 'api/Vehicle/Vehicles',  options);
	}

    deleteVehicleData(regno: any) {
		// const input = JSON.stringify({
		// 	username: userName,
		// 	password: password

		// });
        console.log('token',this.token,regno)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
            'Authorization': `Bearer ${this.token}`,
            // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTcxNjI1NTYsImlzcyI6ImFzaGxrYWRzMDEyIiwiYXVkIjoiYXNobGthZHMwMTIifQ.ncuz5lIbVUG37_Zvgs_z9d9STfuqCfG8E92LBZmTMUw`
		});
		const options = {
			headers: httpHeaders
		};
		// console.log(environment[global.env].API_URL);
		// localStorage.setItem("Envurl", environment[global.env].API_URL);
		return this.httpClient.delete(environment.stage.API_V_URL + 'api/Vehicle/Vehiclesapi/Vehicle/DeleteVehicle?registrationNo'+{regno},  options);
	}



  }
