import { ServerResolver } from './server-resolver.service';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Use resolve guard to get the dynamic data
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(params => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
  }

  onEdit() {
    // from relative path
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    });

    // from root path
    // this.router.navigate(['/servers', this.server.id, 'edit']);
  }
}
