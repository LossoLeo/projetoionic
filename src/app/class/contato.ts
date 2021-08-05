export class Contato {

    private _nome: string;
    private _telefone: number;
    private _sexo: string;
    private _dataNascimento: string;


    constructor(nome : string, telefone : number, sexo : string, dataNascimento : string){
        this._nome = nome;
        this._telefone = telefone;
        this._sexo = sexo;
        this._dataNascimento = dataNascimento;
    }

    public getNome() : string{
        return this._nome
    }

    public getTelefone() : number{
        return this._telefone
    }

    public getSexo() : string{
        return this._sexo
    }

    public getDataNascimento() : string{
        return this._dataNascimento
    }


    public setNome(nome: string) : void{
        this._nome = nome;
    }

    public setTelefone(telefone : number) : void{
        this._telefone = telefone;
    }

    public setSexo(sexo: string) : void{
        this._sexo = sexo;
    }

    public setDataNascimento(dataNascimento: string) : void{
        this._dataNascimento = dataNascimento;
    }

    
}
