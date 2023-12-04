let shoes = []
//set   


// class shoe {
//     constructor(brand, description,price,url) {
//        this.brand = brand
//        this.description = description
//        this.price = price
//        this.url = url
//     }
// }

function Shoe(brand, description,price,url) {
       this.brand = brand
       this.description = description
       this.price = price
       this.url = url
}

let shoeItem =  new Shoe('Nike',"jordan 1",1200)
let shoeItem2 = new Shoe('Nike',"Air force",1200)
let shoeItem3 = new Shoe('Nike',"dunks",1200)
let shoeItem4 = new Shoe('Nike',"jordan 4",1200)


let adidas =  new Shoe('adidas','spiderman miles morales',1500,'https://i.postimg.cc/sXcLD2v4/spider-man-2-adidas-shoes-ign-2023-preorder-order-where-to-buy-1696341802109.png')
let adidas2 = new Shoe('adidas','superstar',1500)
let adidas3 = new Shoe('adidas','high top',1500)
let adidas4 = new Shoe('adidas','sport',1500)

let puma = new  Shoe('puma','white and green',900)
let puma2 = new Shoe('puma','green and black',900)
let puma3 = new Shoe('puma','limited edition',900)
let puma4 = new Shoe('puma','black and white',900)

let converse =  new Shoe('converse','high-top',1000)
let converse2 = new Shoe('converse','low-top',1000)
let converse3 = new Shoe('converse','limited edition high-top',1000)
let converse4 = new Shoe('converse','limited edition high-top',1000)

let vans =  new Shoe('vans','low-top',800)
let vans2 = new Shoe('vans','high-top',800)
let vans3 = new Shoe('vans','sliders',800)
let vans4=  new Shoe('vans','limited edition high-top',800)

//fun set,get

shoes.push(shoeItem,shoeItem2,shoeItem3,shoeItem4,adidas,adidas2,adidas3,adidas4,converse,converse2,converse3,converse4,puma,puma2,puma3,puma4,converse,converse2,converse3,converse4,vans,vans2,vans3,vans4)
localStorage.setItem('storage',JSON.stringify(shoes))

function setAndGet(){
    localStorage.setItem('storage',JSON.stringify(shoes))
    shoes = JSON.parse(localStorage.getItem('storage'))
}

let table = document.querySelector('table')
window.onload= function unity(){
    let products = shoes.map((item,index) => {
       console.log(item);
       console.log(index);
       return `
    
               <tr>
               <td class ="text-black">${index + 1}</td>
               <td class ="text-black">${item.brand}</td>
               <td class ="text-black">R${item.price}</td>
               <td class ="text-black"><img src="${item.url}" style="width: 100px; height: 100px;"></td>
               <td class ="text-black"><button value =${index} data-edit>edit</button></td>
               <td><button value =${index} data-delete class= "delete">delete</button></td>
               </tr>
    
       `
    })
    table.innerHTML =products.join('')
}

/*




*/