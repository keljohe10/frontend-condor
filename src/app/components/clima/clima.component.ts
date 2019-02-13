import { ClimaService } from '../../services/clima.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

clima: any[] = [];
icon: string;
name: string;
desc: string;
  constructor(private _climaServices: ClimaService ) { }

  ngOnInit() {
    this._climaServices.getClima()
          .subscribe( (resp: any) => {
            this.clima = resp['main'];
            this.icon = resp.weather[0].icon;
            this.name = resp.name;
            this.desc = resp.weather[0].description;
            console.log(resp);
          });
  }

}
