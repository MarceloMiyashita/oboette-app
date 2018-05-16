import { LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Importações necessárias

// Importação do serviço de estudo
import { EstudosProvider } from '../../providers/estudos/estudos';

// Importação do modelo de estudo
import { Estudos } from '../../models/estudos'

// Importação da página tabs que o usuário será direcionado
// ao finalizar a edição de um estudo
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-adicionar-estudo',
  templateUrl: 'adicionar-estudo.html',
})
export class AdicionarEstudoPage {

  // Definição do atributo estudo que será usado para o cadastro
  public estudo = {} as Estudos;

  // Adicionando o serviço de estudo no construtor
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private estudosProvider:EstudosProvider,
              public loadingCtrl: LoadingController) {
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde, você está sendo redirecionado...",
      duration: 1000
    });
    loader.present();
  }

  // Método que será usado para adicionar um estudo
  adicionarEstudo(estudo: Estudos) {
      estudo.finalizada = false;
      this.estudosProvider.adicionar(estudo);
      this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarEstudoPage');
  }

}
