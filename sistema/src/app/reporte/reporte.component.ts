// reporte.component.ts

import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../services/reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'],
})
export class ReporteComponent implements OnInit {
  informeData: any[] = [];

  constructor(private reporteService: ReporteService) {}

  ngOnInit(): void {
    this.reporteService.obtenerInformeVuelos().subscribe((data) => {
      this.informeData = data;
    });
  }
}
