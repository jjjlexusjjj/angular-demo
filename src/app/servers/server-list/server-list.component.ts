import { Component, OnInit } from '@angular/core';
import {Server} from '../server';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  servers: Server[] = [
    {
      id: this.generateId(),
      name: 'Test Server',
      capacity: 10
    }, {
      id: this.generateId(),
      name: 'Prod server',
      capacity: 100
    }
  ];

  constructor(private serverService: ServerService) {
  }

  onAddServer(name: string): void {
    this.servers.push({name: name, id: this.generateId(), capacity: 50});
  }

  onSave(): void {
    this.serverService.storeServer(this.servers)
      .subscribe(next => console.log('save next', next), error => console.log('error', error), () => console.log('complete'));
  }

  private generateId(): number {
    return Math.round(Math.random() * 10000);
  }

  onRemove(index: number): void {
    this.servers.splice(index, 1);
  }

  ngOnInit(): void {
    this.serverService.getServers()
      .subscribe(data => this.servers = data);
  }

}
