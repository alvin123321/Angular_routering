import { ServersService } from './../servers.service';
import { Observable } from 'rxjs/Observable';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';

interface Service {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Service> {
  constructor(private serverService: ServersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Service> | Promise<Service> | Service {
    return this.serverService.getServer(+route.params['id']);
  }
}
