export class RegistroAduana {
    public oficial: string;           
    private codigoSeguridad: string;  
    protected zona: string;          

    constructor(oficial: string, codigo: string, zona: string) {
        this.oficial = oficial;
        this.codigoSeguridad = codigo;
        this.zona = zona;
    }

    public validarEntrada(): void {
        console.log(`Oficial ${this.oficial} validando acceso con código oculto.`);
        this.verificarCodigo(this.codigoSeguridad);
    }

    private verificarCodigo(cod: string): void {
        if(cod === "1234") {
            console.log("Acceso Concedido.");
        } else {
            console.log("Acceso Denegado.");
        }
    }
}