import { Component, OnInit } from '@angular/core';
import { Server } from '../server';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {

  server: Server;

  constructor() { }

  ngOnInit() {
  }

}
