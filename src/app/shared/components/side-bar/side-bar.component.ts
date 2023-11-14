import { Component, OnInit } from '@angular/core';
import { MediaPlayerComponent } from '../media-player/media-player.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
    mainMenu: { 
        defaultOptions: Array<any>, accessLink: Array<any>, customOptions: Array<any>
    } = { defaultOptions: [], accessLink: [], customOptions: [] };

    customOptions: Array<any> = []

    constructor() {};

    ngOnInit(): void {
        this.mainMenu.defaultOptions = [
            {
                name: 'Home',
                icon: 'uil uil-estate',
                router: ['/']
            },
            {
                name: 'Buscar',
                icon: 'uil uil-search',
                router: ['/', 'history']
            },
            {
                name: 'Home',
                icon: 'uil uil-chart',
                router: ['/', 'favorites']
            }
        ]

        this.mainMenu.accessLink = [
            {
                name: 'Crear lista',
                icon: 'uil'
            },
            {
                name: 'Canciones que te gustan',
                icon: 'uil-heart-medical'
            }
        ]

        this.customOptions = [
            {
                name: 'Mi lista 1º',
                routerÑ : ['/']
            },
            {
                name: 'Mi lista 2º',
                routerÑ : ['/']
            },
            {
                name: 'Mi lista 3º',
                routerÑ : ['/']
            },
            {
                name: 'Mi lista 4º',
                routerÑ : ['/']
            }
        ]
    }

}
