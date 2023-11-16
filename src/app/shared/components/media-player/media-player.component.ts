import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

    mockCover: any = {
        cover: 'https://images.coveralia.com/audio/m/Melendi-Caminando_Por_La_Vida_(CD_Single)-Frontal.jpg',
        album: 'Que El Cielo Espere Sentado',
        name: 'Caminando por la vida'
    }

}
