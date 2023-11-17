import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

    mockCover: TrackModel = {
        cover: 'https://images.coveralia.com/audio/m/Melendi-Caminando_Por_La_Vida_(CD_Single)-Frontal.jpg',
        album: 'Que El Cielo Espere Sentado',
        name: 'Caminando por la vida',
        url: 'http://localhost/track.mp3',
        _id: 1

    }

    constructor() {

    }

    ngOnInit(): void {

    }

}
