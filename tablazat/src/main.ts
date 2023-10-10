import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Product } from './Product';
let items:Product[] = []

function Add(){
  const tbl = document.getElementById('tbl')!
  const row = document.createElement('tr')
  const cell = document.createElement('td')
  const cell1 = document.createElement('td')
  const cell2 = document.createElement('td')
  for(const vs of items){
    cell.textContent = `${vs.name}`
    cell1.textContent = `${vs.price}`
    cell2.textContent = `${vs.code}`
  }
  row.appendChild(cell)
  row.appendChild(cell1)
  row.appendChild(cell2)
  tbl.appendChild(row)
  console.log(row)
}

function ReadIn(){
  try{
    const name = (document.getElementById('name') as HTMLInputElement).value
    const price = parseInt((document.getElementById('price') as HTMLInputElement).value)
    const code = (document.getElementById('code') as HTMLInputElement).value
    const product : Product = new Product(name, price, code)
    items.push(product)
    console.table(product)
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