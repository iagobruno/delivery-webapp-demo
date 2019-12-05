import { PlateInterface } from './common/types'

export const configs = {
  title: 'Ramo Cumê',
  description: 'Uma simples descrição',
  headerCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8WLJx1EUnrollgkuyETBCaj-g-xC28_HRFYyxldu8vlJH3xoA',
  fakePhone: '+55 955-5893-1496',
  randomPlace: 'R. Raul Uchôa, 52 - Bom Futuro, Fortaleza - CE',
  /** Em minutos */
  averageDeliveryDuration: 30,
  deliveryFee: 4.0,
  deliveryTime: {
    'Domingo': '18:30 às 23:59',
    'Segunda': null,
    'Terça': '18:30 às 22:00',
    'Quarta': '18:30 às 22:00',
    'Quinta': '18:30 às 22:00',
    'Sexta': '18:30 às 22:00',
    'Sábado': '18:30 às 23:59',
  },
  minimumPriceToConfirmPurchase: 0,
}

export const menu: Array<PlateInterface> = [
  {
    id: 1,
    kind: 'Hamburguer',
    title: 'Hamburguer',
    price: 10,
    priceEstimate: 15.99,
    image: 'https://st2.depositphotos.com/3957801/5642/i/450/depositphotos_56423065-stock-photo-bacon-burger.jpg',
    fields: {
      'Ingredientes': {
        type: 'choice',
        limit: Infinity,
        options: [
          { id: 1, title: 'Bacon', price: 4.0 },
          { id: 2, title: 'Queijo Cheddar', selectedByDefault: true },
          { id: 4, title: 'Tomate e alface', selectedByDefault: true },
          { id: 5, title: 'Ovo', selectedByDefault: true },
          { id: 6, title: 'Batata Palha', price: 2.0, selectedByDefault: true },
        ]
      },
      'Opções extras': {
        type: 'choice',
        atLeast: 0,
        limit: Infinity,
        options: [
          { id: 34, title: 'Catchup' },
          { id: 35, title: 'Barbecue', price: 1 },
          { id: 36, title: 'Maionese temperada' },
          { id: 37, title: 'Mostarda' },
        ]
      },
    }
  },
  {
    id: 2,
    kind: 'Pizza',
    title: 'Pizza Média (Um sabor)',
    description: '4 fatias',
    price: undefined,
    image: 'https://media.istockphoto.com/photos/slice-of-hot-pizza-picture-id519526540?k=6&m=519526540&s=612x612&w=0&h=ouy892vP2sk0z0lMouKBqo8YXtSgq9PdnAg-cvUd_YQ=',
    fields: {
      'Sabores': {
        type: 'choice',
        atLeast: 1,
        limit: 1,
        options: [
          { id: 7, title: 'Calabresa', price: 17.99, description: 'Molho de tomate, mussarela, calabresa, cebola, azeitona e orégano.' },
          { id: 8, title: 'Portuguesa', price: 18.99, description: 'Ovos, cebola, azeitona, ervilha, queijo e presunto.' },
          { id: 9, title: 'Frango com catupiry', price: 17.99, description: 'Molho de tomate, mussarela, frango catupiry, tomate, azeitona e orégano.' },
          { id: 10, title: 'Muçarela', price: 16.99 },
          { id: 11, title: 'Napolitana', price: 17.99 },
          { id: 12, title: 'Brigadeiro', price: 18.99, description: 'Leite condensado, chocolate e cobertura de granulados de chocolate.' },
          { id: 13, title: '4 Queijos', price: 16.99, description: 'Mussarela, provolone, gorgonzola e catupiry.' },
        ]
      },
    }
  },
  {
    id: 3,
    kind: 'Pizza',
    title: 'Pizza Grande (Um sabor)',
    description: '6 fatias',
    price: undefined,
    discount: 4,
    image: 'https://media.istockphoto.com/photos/slice-of-hot-pizza-picture-id519526540?k=6&m=519526540&s=612x612&w=0&h=ouy892vP2sk0z0lMouKBqo8YXtSgq9PdnAg-cvUd_YQ=',
    fields: {
      'Sabores': {
        type: 'choice',
        atLeast: 1,
        limit: 1,
        options: [
          { id: 14, title: 'Calabresa', price: 22.99, description: 'Molho de tomate, mussarela, calabresa, cebola, azeitona e orégano.' },
          { id: 15, title: 'Portuguesa', price: 24.99, description: 'Ovos, cebola, azeitona, ervilha, queijo e presunto.' },
          { id: 16, title: 'Frango com catupiry', price: 22.99, description: 'Molho de tomate, mussarela, frango catupiry, tomate, azeitona e orégano.' },
          { id: 17, title: 'Muçarela', price: 20.99 },
          { id: 18, title: 'Napolitana', price: 22.99 },
          { id: 19, title: 'Brigadeiro', price: 25.99, description: 'Leite condensado, chocolate e cobertura de granulados de chocolate.' },
          { id: 20, title: '4 Queijos', price: 20.99, description: 'Mussarela, provolone, gorgonzola e catupiry.' },
        ]
      },
    }
  },
  {
    id: 18,
    kind: 'Pizza',
    title: 'Pizza Grande (Dois sabores)',
    description: '6 fatias',
    price: undefined,
    discount: 4,
    image: 'https://media.istockphoto.com/photos/slice-of-hot-pizza-picture-id519526540?k=6&m=519526540&s=612x612&w=0&h=ouy892vP2sk0z0lMouKBqo8YXtSgq9PdnAg-cvUd_YQ=',
    fields: {
      'Sabores': {
        type: 'choice',
        atLeast: 2,
        limit: 2,
        options: [
          { id: 14, title: 'Calabresa', price: 11.99, description: 'Molho de tomate, mussarela, calabresa, cebola, azeitona e orégano.' },
          { id: 15, title: 'Portuguesa', price: 12.99, description: 'Ovos, cebola, azeitona, ervilha, queijo e presunto.' },
          { id: 16, title: 'Frango com catupiry', price: 12.99, description: 'Molho de tomate, mussarela, frango catupiry, tomate, azeitona e orégano.' },
          { id: 17, title: 'Muçarela', price: 9.99 },
          { id: 18, title: 'Napolitana', price: 6.99 },
          { id: 19, title: 'Brigadeiro', price: 12.99, description: 'Leite condensado, chocolate e cobertura de granulados de chocolate.' },
          { id: 20, title: '4 Queijos', price: 9.99, description: 'Mussarela, provolone, gorgonzola e catupiry.' },
        ]
      },
    }
  },
  {
    id: 4,
    kind: 'Pizza',
    title: 'Pizza tamanho Família (Um sabor)',
    description: '8 fatias',
    price: undefined,
    image: 'https://media.istockphoto.com/photos/slice-of-hot-pizza-picture-id519526540?k=6&m=519526540&s=612x612&w=0&h=ouy892vP2sk0z0lMouKBqo8YXtSgq9PdnAg-cvUd_YQ=',
    fields: {
      'Sabores': {
        type: 'choice',
        atLeast: 1,
        limit: 1,
        options: [
          { id: 21, title: 'Calabresa', price: 32.99, description: 'Molho de tomate, mussarela, calabresa, cebola, azeitona e orégano.' },
          { id: 22, title: 'Portuguesa', price: 34.99, description: 'Ovos, cebola, azeitona, ervilha, queijo e presunto.' },
          { id: 23, title: 'Frango com catupiry', price: 32.99, description: 'Molho de tomate, mussarela, frango catupiry, tomate, azeitona e orégano.' },
          { id: 24, title: 'Muçarela', price: 29.99 },
          { id: 25, title: 'Napolitana', price: 32.99 },
          { id: 26, title: 'Brigadeiro', price: 34.99, description: 'Leite condensado, chocolate e cobertura de granulados de chocolate.' },
          { id: 27, title: '4 Queijos', price: 29.99, description: 'Mussarela, provolone, gorgonzola e catupiry.' },
        ]
      },
    }
  },
  {
    id: 17,
    kind: 'Pizza',
    title: 'Pizza tamanho Família (Dois sabores)',
    description: '8 fatias',
    price: undefined,
    image: 'https://media.istockphoto.com/photos/slice-of-hot-pizza-picture-id519526540?k=6&m=519526540&s=612x612&w=0&h=ouy892vP2sk0z0lMouKBqo8YXtSgq9PdnAg-cvUd_YQ=',
    fields: {
      'Sabores': {
        type: 'choice',
        atLeast: 2,
        limit: 2,
        options: [
          { id: 21, title: 'Calabresa', price: 16.5, description: 'Molho de tomate, mussarela, calabresa, cebola, azeitona e orégano.' },
          { id: 22, title: 'Portuguesa', price: 17.5, description: 'Ovos, cebola, azeitona, ervilha, queijo e presunto.' },
          { id: 23, title: 'Frango com catupiry', price: 15.99, description: 'Molho de tomate, mussarela, frango catupiry, tomate, azeitona e orégano.' },
          { id: 24, title: 'Muçarela', price: 14.99 },
          { id: 25, title: 'Napolitana', price: 16.5 },
          { id: 26, title: 'Brigadeiro', price: 17.5, description: 'Leite condensado, chocolate e cobertura de granulados de chocolate.' },
          { id: 27, title: '4 Queijos', price: 14.99, description: 'Mussarela, provolone, gorgonzola e catupiry.' },
        ]
      },
    }
  },
  {
    id: 5,
    kind: 'Refrigerante',
    title: 'Coca-cola lata 350 ml',
    price: 3,
    image: 'https://decisaoentrega.fbitsstatic.net/img/p/refrigerante-coca-cola-lata-350ml-260249/427115-2.jpg?w=420&h=420&v=no-change',
    canBeBoughtAlone: false,
    showRating: false,
  },
  {
    id: 6,
    kind: 'Refrigerante',
    title: 'Coca-cola 2l',
    price: 8,
    image: 'https://www.carone.com.br/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/2/7/27324_B_1.jpg',
    canBeBoughtAlone: false,
    showRating: false,
  },
  {
    id: 7,
    kind: 'Refrigerante',
    title: 'Guaraná antártica lata 350 ml',
    image: 'https://pedidos.teigicomidajaponesa.com.br/wp-content/uploads/2018/06/Guaran%C3%A1.jpg',
    price: 3,
    canBeBoughtAlone: false,
    showRating: false,
  },
  {
    id: 8,
    kind: 'Refrigerante',
    title: 'Guaraná antártica 2l',
    image: 'https://static.carrefour.com.br/medias/sys_master/images/images/hee/h1d/h00/h00/9276794142750.jpg',
    price: 8,
    canBeBoughtAlone: false,
    showRating: false,
  },
  {
    id: 9,
    kind: 'Suco',
    title: 'Suco de caju 300ml',
    image: 'http://panchosdogueria.com.br/wp-content/uploads/2018/08/download-1.jpg',
    price: 5,
    canBeBoughtAlone: false,
    showRating: false,
  },
  {
    id: 10,
    kind: 'Suco',
    title: 'Suco de goiaba 300ml',
    image: 'http://www.vinhais.com.br/Produtos/78960054000401.jpg',
    price: 5,
    canBeBoughtAlone: false,
    showRating: false,
  },
  {
    id: 11,
    kind: 'Suco',
    title: 'Suco de graviola 300ml',
    image: 'http://www.nossopointlanches.com.br/app2/admin/produtos/graviola500ml.jpg',
    price: 5,
    canBeBoughtAlone: false,
    showRating: false,
  },
  {
    id: 12,
    kind: 'Suco',
    title: 'Suco de abacaxi 300ml',
    image: 'http://www.picanhacia.com.br/wp-content/uploads/2017/02/2423714724-refresco-de-laranja-e-abacaxi-2.jpg',
    price: 5,
    canBeBoughtAlone: false,
    showRating: false,
  },
  {
    id: 13,
    kind: 'Suco',
    title: 'Suco de maracujá 300ml',
    image: 'https://rechlanches.com.br/wp-content/uploads/2017/06/suco-de-maracuja-rechlanches-joinville.jpg',
    price: 5,
    canBeBoughtAlone: false,
    showRating: false,
  },
  {
    id: 14,
    kind: 'Suco',
    title: 'Suco de acerola 300ml',
    image: 'https://wifireme.s3-sa-east-1.amazonaws.com/images/574f4483ec40f-295b2c431c910e09e5b9c3e29444d971.png',
    price: 5,
    canBeBoughtAlone: false,
    showRating: false,
  },
  {
    id: 15,
    kind: 'Hamburguer',
    title: 'Combo Hamburguer + Batata + Refrigerante',
    description: `Pão artesanal da casa, blend de 110 gramas, picles, queijo prato, bacon, alface americana+ molho apimentado.`,
    image: 'https://image.freepik.com/fotos-gratis/hamburguer-com-refrigerante-e-batata-frita_23-2148273037.jpg',
    price: 19,
    priceEstimate: 20.99,
    fields: {
      'Ingredientes': {
        type: 'choice',
        atLeast: 0,
        limit: Infinity,
        options: [
          { id: 28, title: 'Bacon', price: 4.0 },
          { id: 29, title: 'Queijo cheddar', selectedByDefault: true },
          { id: 31, title: 'Tomate e alface', selectedByDefault: true },
          { id: 32, title: 'Ovo', selectedByDefault: true },
          { id: 33, title: 'Batata palha', price: 2.0, selectedByDefault: true },
        ]
      },
      'Opções extras': {
        type: 'choice',
        atLeast: 0,
        limit: Infinity,
        options: [
          { id: 34, title: 'Catchup' },
          { id: 35, title: 'Barbecue', price: 1 },
          { id: 36, title: 'Maionese temperada' },
          { id: 37, title: 'Mostarda' },
        ]
      },
      'Opções de bebida': {
        type: 'choice',
        atLeast: 1,
        limit: 1,
        options: [
          { id: 38, title: 'Coca-Cola', description: 'Lata 350 ml' },
          { id: 39, title: 'Guaraná antártica', description: 'Lata 350 ml' },
        ]
      },
    }
  },
  {
    id: 19,
    kind: 'Hamburguer',
    title: 'Combo Hamburguer + Batata + Suco',
    description: `Pão artesanal da casa, blend de 110 gramas, picles, queijo prato, bacon, alface americana+ molho apimentado.`,
    image: 'https://image.freepik.com/fotos-gratis/hamburguer-com-refrigerante-e-batata-frita_23-2148273037.jpg',
    price: 21,
    priceEstimate: 22.99,
    fields: {
      'Ingredientes': {
        type: 'choice',
        atLeast: 0,
        limit: Infinity,
        options: [
          { id: 28, title: 'Bacon', price: 4.0 },
          { id: 29, title: 'Queijo cheddar', selectedByDefault: true },
          { id: 31, title: 'Tomate e alface', selectedByDefault: true },
          { id: 32, title: 'Ovo', selectedByDefault: true },
          { id: 33, title: 'Batata palha', price: 2.0, selectedByDefault: true },
        ]
      },
      'Opções extras': {
        type: 'choice',
        atLeast: 0,
        limit: Infinity,
        options: [
          { id: 34, title: 'Catchup' },
          { id: 35, title: 'Barbecue', price: 1 },
          { id: 36, title: 'Maionese temperada' },
          { id: 37, title: 'Mostarda' },
        ]
      },
      'Opções de bebida': {
        type: 'choice',
        atLeast: 1,
        limit: 1,
        options: [
          { id: 38, title: 'Suco de abacaxi', description: '300ml' },
          { id: 39, title: 'Suco de goiaba', description: '300ml' },
          { id: 40, title: 'Suco de graviola', description: '300ml' },
          { id: 41, title: 'Suco de maracujá', description: '300ml' },
          { id: 42, title: 'Suco de acerola', description: '300ml' },
          { id: 43, title: 'Suco de caju', description: '300ml' },
        ]
      },
    }
  },
  {
    id: 16,
    kind: 'Sobremesa',
    title: 'Mousse de chocolate com chantilly',
    image: 'https://t1.rg.ltmcdn.com/pt/images/3/3/0/mousse_de_chocolate_com_chantilly_8033_600.jpg',
    price: 10.50,
    canBePurchasedOnline: false,
  }
]

/** Uma coleção é uma lista de pratos (referenciados pelo id) que possuem algo em comum. */
export const collections = {
  'PROMOÇÕES': menu.filter(plate => typeof plate.discount !== 'undefined').map(plate => plate.id),
  'Hamburguers': [1],
  'Pizzas': [2, 3, 18, 4, 17],
  'Combos': [15, 19],
  //'Refrigerantes': [5, 6, 7, 8],
  //'Sucos naturais': [12, 10, 11, 13, 14, 9],
}

export const availableKinds = Array.from( new Set(menu.map(plate => plate.kind)) )
