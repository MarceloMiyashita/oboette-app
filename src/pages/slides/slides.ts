import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';


//@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  slides = [
    {
      title: "Tabela de Hiragana",
      description: "Tabela de Hiragana para aprender novas palavras",
      image: "assets/imgs/hiragana.png",
    },
    {
      title: "Tabela de Katakana",
      description: "Tabela de Katakana para aprender novas palavras",
      image: "assets/imgs/katakana.png",
    },
    {
      title: "Sobre a língua japonesa",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

}
