import '../node_modules/bootstrap/scss/style.css'
import { Product } from './Product'
let items:Product[] = []

function Add(){
  
}

function ReadIn(){
  try{
    const name = (document.getElementById('name') as HTMLInputElement).value
    const price = parseInt((document.getElementById('price') as HTMLInputElement).value)
    const code = (document.getElementById('code') as HTMLInputElement).value
    const product : Product = new Product(name, price, code)
    items.push(product)
    Add()
  } catch(e){
    if(e instanceof Error){
      console.log(e.message)
    }
  }
}

function init(){
  document.getElementById('addtbl')!.addEventListener('click', ReadIn)
}

document.addEventListener('DOMContentLoaded', init)