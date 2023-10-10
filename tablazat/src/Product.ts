export class Product{
    constructor(public name:string, public price:number, public code:string){
        if(name.trim() == ""){
            throw new Error("Nem lehet üres a Name")
        }
        else if(price < 0 && price > 100 && isNaN(price)){
            throw new Error("Híbás érték")
        }
        else if(code.trim().length != 11){
            throw new Error("A code-nak 11 karakter hosszúnak kell lennie")
        }
    }
}