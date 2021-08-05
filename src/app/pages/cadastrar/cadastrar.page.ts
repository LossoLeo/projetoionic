import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { AlertController, IonDatetime } from '@ionic/angular';
import { Contato } from 'src/app/class/contato';
import { ContatoService } from 'src/app/services/contato.service';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  private _nome: string
  private _telefone: number
  private _sexo: string
  private _dataNascimento: string
  

  constructor(public alertController: AlertController, private _router : Router, private _contatoService : ContatoService) { }

  ngOnInit() {
  }


  private Cadastrar() :void {
    this._dataNascimento = this._dataNascimento.split('T')[0];
    if((this.Validar(this._nome)) && (this.Validar(this._telefone)) && (this.Validar(this._sexo)) && (this.Validar(this._dataNascimento))){
      let contato : Contato = new Contato(this._nome, this._telefone, this._sexo, this._dataNascimento)
      this._contatoService.inserir(contato);
      this.presentAlert("Agenda de Contatos", "Cadastrar", "Cadastro efetuado com sucesso!")
      this._router.navigate(["/home"])
    }
    else{
      this.presentAlert("Agenda de Contatos", "Cadastrar", "Todos os campos são obrigatórios!")
    }
  }

  private Validar(campo: any) :boolean {
    if(!campo){
      return false
    }
    else{
      return true
    }
  }

  async presentAlert(titulo: string, subtitulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  private irParaHome() : void {
    this._router.navigate(["/home"])
  }

}