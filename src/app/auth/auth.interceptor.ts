import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { DataService } from "../data/data.service";
import 'rxjs/add/operator/do';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { error } from "util";
 
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if(req.headers.get('No-Auth') == "True"){
            return next.handle(req.clone());
        }
        if(localStorage.getItem('userToken')!= null){
            const clonereq = req.clone(
                {
                    headers: req.headers.set("Authorization", "Bearer" + localStorage.getItem('userToken'))
                }
            );
            return next.handle(clonereq);
        }
        else{
            this.router.navigateByUrl('/Login');
        }
    }
}