export const configs = {
  title: 'Ramo Cumê',
  description: 'Uma simples descrição',
  headerCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8WLJx1EUnrollgkuyETBCaj-g-xC28_HRFYyxldu8vlJH3xoA',
  fakePhone: '+55 955-5893-1496',
  randomPlace: 'R. Raul Uchôa, 52 - Bom Futuro, Fortaleza - CE',
  averageDeliveryDuration: '40-50 min',
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

export const menu: Array<PlateType> = [
  {
    id: 1,
    title: 'Hamburguer',
    price: 10,
    image: 'https://st2.depositphotos.com/3957801/5642/i/450/depositphotos_56423065-stock-photo-bacon-burger.jpg',
    fields: {
      'Ingredientes': {
        type: 'choice',
        limit: Infinity,
        options: [
          { title: 'Bacon', price: 4.0 },
          { title: 'Queijo Cheddar', price: 2.0 },
          { title: 'Queijo Mussarela', price: 2.0 },
          { title: 'Tomate e alface', price: 0, selectedByDefault: true },
          { title: 'Ovo', price: 1.0 },
          { title: 'Batata Palha', price: 2.0 },
        ]
      }
    }
  },
  {
    id: 2,
    title: 'Pizza Média (4 fatias)',
    price: null,
    image: 'https://media.istockphoto.com/photos/slice-of-hot-pizza-picture-id519526540?k=6&m=519526540&s=612x612&w=0&h=ouy892vP2sk0z0lMouKBqo8YXtSgq9PdnAg-cvUd_YQ=',
    fields: {
      'Sabores': {
        type: 'choice',
        atLeast: 1,
        limit: 1,
        options: [
          { title: 'Calabresa', price: 17.99, description: 'Molho de tomate, mussarela, calabresa, cebola, azeitona e orégano.' },
          { title: 'Portuguesa', price: 18.99, description: 'Ovos, cebola, azeitona, ervilha, queijo e presunto.' },
          { title: 'Frango com catupiry', price: 17.99, description: 'Molho de tomate, mussarela, frango catupiry, tomate, azeitona e orégano.' },
          { title: 'Muçarela', price: 16.99 },
          { title: 'Napolitana', price: 17.99 },
          { title: 'Brigadeiro', price: 18.99, description: 'Leite condensado, chocolate e cobertura de granulados de chocolate.' },
          { title: '4 Queijos', price: 16.99, description: 'Mussarela, provolone, gorgonzola e catupiry.' },
        ]
      },
    }
  },
  {
    id: 3,
    title: 'Pizza Grande (6 fatias)',
    price: null,
    discount: 4,
    image: 'https://media.istockphoto.com/photos/slice-of-hot-pizza-picture-id519526540?k=6&m=519526540&s=612x612&w=0&h=ouy892vP2sk0z0lMouKBqo8YXtSgq9PdnAg-cvUd_YQ=',
    fields: {
      'Sabores': {
        type: 'choice',
        atLeast: 1,
        limit: 2,
        options: [
          { title: 'Calabresa', price: 22.99, description: 'Molho de tomate, mussarela, calabresa, cebola, azeitona e orégano.' },
          { title: 'Portuguesa', price: 24.99, description: 'Ovos, cebola, azeitona, ervilha, queijo e presunto.' },
          { title: 'Frango com catupiry', price: 22.99, description: 'Molho de tomate, mussarela, frango catupiry, tomate, azeitona e orégano.' },
          { title: 'Muçarela', price: 20.99 },
          { title: 'Napolitana', price: 22.99 },
          { title: 'Brigadeiro', price: 25.99, description: 'Leite condensado, chocolate e cobertura de granulados de chocolate.' },
          { title: '4 Queijos', price: 20.99, description: 'Mussarela, provolone, gorgonzola e catupiry.' },
        ]
      },
    }
  },
  {
    id: 4,
    title: 'Pizza tamanho Família (8 fatias)',
    price: null,
    image: 'https://media.istockphoto.com/photos/slice-of-hot-pizza-picture-id519526540?k=6&m=519526540&s=612x612&w=0&h=ouy892vP2sk0z0lMouKBqo8YXtSgq9PdnAg-cvUd_YQ=',
    fields: {
      'Sabores': {
        type: 'choice',
        atLeast: 1,
        limit: 2,
        options: [
          { title: 'Calabresa', price: 32.99, description: 'Molho de tomate, mussarela, calabresa, cebola, azeitona e orégano.' },
          { title: 'Portuguesa', price: 34.99, description: 'Ovos, cebola, azeitona, ervilha, queijo e presunto.' },
          { title: 'Frango com catupiry', price: 32.99, description: 'Molho de tomate, mussarela, frango catupiry, tomate, azeitona e orégano.' },
          { title: 'Muçarela', price: 29.99 },
          { title: 'Napolitana', price: 32.99 },
          { title: 'Brigadeiro', price: 34.99, description: 'Leite condensado, chocolate e cobertura de granulados de chocolate.' },
          { title: '4 Queijos', price: 29.99, description: 'Mussarela, provolone, gorgonzola e catupiry.' },
        ]
      },
    }
  },
  {
    id: 5,
    title: 'Coca-cola lata 350 ml',
    price: 3,
    image: 'https://decisaoentrega.fbitsstatic.net/img/p/refrigerante-coca-cola-lata-350ml-260249/427115-2.jpg?w=420&h=420&v=no-change',
    cantBeBoughtAlone: true,
  },
  {
    id: 6,
    title: 'Coca-cola 2l',
    price: 8,
    image: 'https://www.carone.com.br/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/2/7/27324_B_1.jpg',
    cantBeBoughtAlone: true,
  },
  {
    id: 7,
    title: 'Guaraná antártica lata 350 ml',
    image: 'https://pedidos.teigicomidajaponesa.com.br/wp-content/uploads/2018/06/Guaran%C3%A1.jpg',
    price: 3,
    cantBeBoughtAlone: true,
  },
  {
    id: 8,
    title: 'Guaraná antártica 2l',
    image: 'https://static.carrefour.com.br/medias/sys_master/images/images/hee/h1d/h00/h00/9276794142750.jpg',
    price: 8,
    cantBeBoughtAlone: true,
  },
  {
    id: 9,
    title: 'Suco de caju 300ml',
    image: 'http://panchosdogueria.com.br/wp-content/uploads/2018/08/download-1.jpg',
    price: 5,
    cantBeBoughtAlone: true,
  },
  {
    id: 10,
    title: 'Suco de goiaba 300ml',
    image: 'http://www.vinhais.com.br/Produtos/78960054000401.jpg',
    price: 5,
    cantBeBoughtAlone: true,
  },
  {
    id: 11,
    title: 'Suco de graviola 300ml',
    image: 'http://www.nossopointlanches.com.br/app2/admin/produtos/graviola500ml.jpg',
    price: 5,
    cantBeBoughtAlone: true,
  },
  {
    id: 12,
    title: 'Suco de abacaxi 300ml',
    image: 'http://www.picanhacia.com.br/wp-content/uploads/2017/02/2423714724-refresco-de-laranja-e-abacaxi-2.jpg',
    price: 5,
    cantBeBoughtAlone: true,
  },
  {
    id: 13,
    title: 'Suco de maracujá 300ml',
    image: 'https://rechlanches.com.br/wp-content/uploads/2017/06/suco-de-maracuja-rechlanches-joinville.jpg',
    price: 5,
    cantBeBoughtAlone: true,
  },
  {
    id: 14,
    title: 'Suco de acerola 300ml',
    image: 'https://wifireme.s3-sa-east-1.amazonaws.com/images/574f4483ec40f-295b2c431c910e09e5b9c3e29444d971.png',
    price: 5,
    cantBeBoughtAlone: true,
  },
  {
    id: 15,
    title: 'Combo Hamburguer + Batata + Refrigerante',
    image: 'https://image.freepik.com/fotos-gratis/hamburguer-com-refrigerante-e-batata-frita_23-2148273037.jpg',
    price: 14,
    fields: {
      'Ingredientes': {
        type: 'choice',
        atLeast: 0,
        limit: Infinity,
        options: [
          { title: 'Bacon', price: 4.0 },
          { title: 'Queijo cheddar', price: 2.0 },
          { title: 'Queijo mussarela', price: 2.0 },
          { title: 'Tomate e alface', price: 0, selectedByDefault: true },
          { title: 'Ovo', price: 1.0 },
          { title: 'Batata palha', price: 2.0 },
        ]
      },
      'Opções extras': {
        type: 'choice',
        options: [
          { title: 'Catchup', price: 1 },
          { title: 'Barbecue', price: 1 },
          { title: 'Maionese temperada', price: 1 },
          { title: 'Mostarda', price: 1 },
        ]
      },
      'Opções de bebida': {
        type: 'choice',
        atLeast: 1,
        limit: 1,
        options: [
          { title: 'Coca-Cola', price: 3, description: 'Lata 350 ml' },
          { title: 'Guaraná antártica', price: 3, description: 'Lata 350 ml' },
        ]
      },
    }
  },
  {
    id: 16,
    title: 'Mousse de chocolate com chantilly',
    image: 'https://t1.rg.ltmcdn.com/pt/images/3/3/0/mousse_de_chocolate_com_chantilly_8033_600.jpg',
    price: 10.50,
    cannotBePurchasedOnline: true,
  }
]

/** Uma coleção é uma lista de pratos (referenciados pelo id) que possuem algo em comum. */
export const collections = {
  'PROMOÇÕES': menu.filter(plate => typeof plate.discount !== 'undefined').map(plate => plate.id),
  'Hamburguers': [1],
  'Pizzas': [2, 3, 4],
  'Combos': [15],
  'Refrigerantes': [5, 6, 7, 8],
  'Sucos naturais': [12, 10, 11, 13, 14, 9],
}




export interface PlateType {
  id: number,
  title: string,
  description?: string,
  image?: string,
  /** Preço original do prato. Pode ser nulo caso o valor deva ser calculado pelas opções escolhidas. */
  price: number | null,
  /** Desconto em reais que será aplicado em cima do preço original. */
  discount?: number,
  /** Sabores, adições ou variações do prato para o usuário escolher. */
  fields?: {
    [key: string]: PlateField,
  },
  /** Indica que o prato não pode ser comprado sozinho. Use nos itens de acompanhamento (sucos). */
  cantBeBoughtAlone?: boolean,
  /** Indica que o prato não pode ser comprado online, somente no estabelecimento. */
  cannotBePurchasedOnline?: boolean,
}

interface PlateField {
  type: 'choice',
  /** Quantidade máxima de itens que podem ser selecionados. */
  limit?: number,
  /** Quantidade mínima de itens que devem ser selecionados. Defina como 0 para o campo ser opcional ou maior que 1 para ser obrigatório. */
  atLeast?: number,
  /** Lista de itens que será mostrada ao usuário. */
  options: Array<FieldOption>,
}

interface FieldOption {
  title: string,
  description?: string,
  /** Preço adicional desta opção que será somado ao valor final. */
  price: number,
  /** Padrão: false */
  selectedByDefault?: boolean,
}
