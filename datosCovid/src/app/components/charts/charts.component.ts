import { Component, OnInit , AfterViewInit} from '@angular/core';
import { ChartService } from "../../services/chart.service";
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
  chartServiceU : ChartService;
  constructor(public chartService:ChartService) {
    this.chartServiceU = chartService;
    
   }

  ngOnInit(): void {

  }


  public casosPositivosEF(){
    this.chartServiceU.getcasosPositivosEF().subscribe( ( data:any ) => {
      console.log(data)
      var etiquetasFinales = [];
      var datosFinales = [];
      for (var i = 0; i < data.length; i++) {
        datosFinales.push(data[i].ENTIDAD)
        etiquetasFinales.push(data[i].CASOS_POSITIVOS)
      }
  
      this.randomize(etiquetasFinales,datosFinales);
      });
    }
    public casosPositivosMEF(){
      this.chartServiceU.getcasosPositivosMEF().subscribe( ( data:any ) => {
        console.log(data)
        var etiquetasFinales = [];
        var datosFinales = [];
        for (var i = 0; i < data.length; i++) {
          datosFinales.push(data[i].ENTIDAD)
          etiquetasFinales.push(data[i].CASOS_POSITIVOS_MUJERES)
        }
    
        this.randomize(etiquetasFinales,datosFinales);
        });
      }
      public casosPositivosHEF(){
        this.chartServiceU.getcasosPositivosHEF().subscribe( ( data:any ) => {
          console.log(data)
          var etiquetasFinales = [];
          var datosFinales = [];
          for (var i = 0; i < data.length; i++) {
            datosFinales.push(data[i].ENTIDAD)
            etiquetasFinales.push(data[i].CASOS_POSITIVOS_HOMBRES)
          }
      
          this.randomize(etiquetasFinales,datosFinales);
          });
        }
        public defuncionesEF(){
          this.chartServiceU.getdefuncionesEF().subscribe( ( data:any ) => {
            console.log(data)
            var etiquetasFinales = [];
            var datosFinales = [];
            for (var i = 0; i < data.length; i++) {
              datosFinales.push(data[i].ENTIDAD)
              etiquetasFinales.push(data[i].CASOS_POSITIVOS)
            }
        
            this.randomize(etiquetasFinales,datosFinales);
            });
          }
          public defuncionesMEF(){
            this.chartServiceU.getdefuncionesMEF().subscribe( ( data:any ) => {
              console.log(data)
              var etiquetasFinales = [];
              var datosFinales = [];
              for (var i = 0; i < data.length; i++) {
                datosFinales.push(data[i].ENTIDAD)
                etiquetasFinales.push(data[i].CASOS_POSITIVOS)
              }
          
              this.randomize(etiquetasFinales,datosFinales);
              });
            }
            public defuncionesHEF(){
              this.chartServiceU.getdefuncionesHEF().subscribe( ( data:any ) => {
                console.log(data)
                var etiquetasFinales = [];
                var datosFinales = [];
                for (var i = 0; i < data.length; i++) {
                  datosFinales.push(data[i].ENTIDAD)
                  etiquetasFinales.push(data[i].MUERTES_POR_COVID)
                }
            
                this.randomize(etiquetasFinales,datosFinales);
                });
              }




  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{ticks: {beginAtZero: true}}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [892420, 989092, 755321, 912970, 922403], label: '2019' },

  ];
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  public randomize(etiquetasFinales,datosFinales): void {
    // Only Change 3 values
    this.barChartData[0].data = etiquetasFinales;
    this.barChartLabels=datosFinales;
  }





}
