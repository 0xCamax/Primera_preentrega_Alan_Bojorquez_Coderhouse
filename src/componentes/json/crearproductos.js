import { writeFileSync } from 'fs';


class Item {
    constructor(Nombre, precio, categoria, imagen){
        this.nombre = Nombre;
        this.categoria = categoria;
        this.descripcion = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illum, veritatis atque similique, consequuntur, unde excepturi nihil a ea doloribus minima neque magnam dolore voluptatibus velit magni necessitatibus exercitationem eveniet!"
        this.precio = precio;
        this.imagen = imagen;
    }
    
}

const ItemList =[]

function additem (a, b, c, d) {
    const item = new Item(a, b, c, d);
    ItemList.push(item);
}

additem("Abrigo lana cinturón", 1000, "Abrigos", "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67010452_99.jpg?ts=1699261452818&imwidth=280&imdensity=2")
additem("Chaqueta tweed maxi flor", 800, "Chaquetas","https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67094073_70.jpg?ts=1707210196626&imwidth=280&imdensity=2")
additem("Mono halter detalle metalizado", 600, "Vestidos", "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67094069_99.jpg?ts=1704974636020&imwidth=280&imdensity=2")
additem("Camisa satinada cuello redondo", 300, "Camisas", "https://shop.mango.com/assets/rcs/pics/static/T5/fotos/S20/57087728_08.jpg?ts=1694520170868&imwidth=280&imdensity=2")
additem("Jeans cargo carpenter", 400, "Jeans", "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/outfit/S20/67003274_TM-99999999_01.jpg?ts=1700226226437&imwidth=280&imdensity=2")
additem("Top punto cuello asimétrico", 300, "Playeras", "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/outfit/S20/67010466_01-99999999_01.jpg?ts=1697543240090&imwidth=280&imdensity=2")
additem("Polo manga corta botones", 300, "Playeras", "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/outfit/S20/67010465_99-99999999_01.jpg?ts=1697047368435&imwidth=280&imdensity=2")
additem("Chaqueta crop tweed bolsillos", 600, "Chaquetas", "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67074073_08_D6.jpg?ts=1706261699916&imwidth=280&imdensity=2")
additem("Mono halter detalle metalizado", 500, "Vestidos", "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/outfit/S20/67074787_OR-99999999_01.jpg?ts=1705656835281&imwidth=280&imdensity=2")
additem("Camisa 100% lyocell", 399, "Camisas", "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67030436_02.jpg?ts=1698937385410&imwidth=280&imdensity=2")
additem("Jeans rectos tiro medio aberturas", 500, "Jeans", "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/outfit/S20/67074437_TM-99999999_01.jpg?ts=1704465189872&imwidth=280&imdensity=2")



const datosJSON = JSON.stringify(ItemList, null, 2);

writeFileSync('productos.json', datosJSON);
