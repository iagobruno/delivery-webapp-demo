export interface PlateInterface {
  id: number;
  kind: string;
  title: string;
  description?: string;
  image?: string;
  /** Preço original do prato. */
  price?: number;
  /**
   * !É usado somente para indicar ao usuário qual é a estimativa de preço final e NÃO será usado em nenhum cálculo!
   * Use nos itens que o preço depende das escolhas do usuário.
   */
  priceEstimate?: number;
  /** Desconto em reais que será aplicado em cima do preço original. */
  discount?: number;
  /** Sabores, adições ou variações do prato para o usuário escolher. */
  fields?: Record<string, PlateFieldInterface>;
  /** Indica se o prato pode ou não ser comprado sozinho. Use nos itens de acompanhamento (sucos). @default true */
  canBeBoughtAlone?: boolean;
  /** Indica se o prato pode ser comprado online ou somente no estabelecimento. @default true */
  canBePurchasedOnline?: boolean;
  /** @default Infinity */
  limitOfPlatesInBag?: number;
  /** @default true */
  showRating?: boolean;
}

export interface PlateFieldInterface {
  type: 'choice';
  /** Quantidade máxima de itens que podem ser selecionados. */
  limit?: number;
  /** Quantidade mínima de itens que devem ser selecionados. Defina como 0 para o campo ser opcional ou maior que 1 para ser obrigatório. */
  atLeast?: number;
  /** Lista de itens que será mostrada ao usuário. */
  options: Array<FieldOptionInterface>;
}

export interface FieldOptionInterface {
  id: number;
  title: string;
  description?: string;
  /** Preço adicional desta opção que será somado ao valor final. */
  price?: number;
  /** Padrão: false */
  selectedByDefault?: boolean;
}

export interface BagItemInterface extends PlateInterface {
  observations?: string;
  repetition?: number;
  /** Preço final do item. */
  priceCache?: number;
  chosenFields?: Record<string, FieldOptionInterface[]>;
}

export type PlateModalFormikValues = Record<string, FieldOptionInterface[]>

export interface OrderInterface {
  plates: Array<BagItemInterface>;
  deliveryType: 'entrega' | 'retirada';
  price: number;
  paid: boolean;
  /** Indica se o prato já está prot para ser entregue. */
  ready: boolean;
  delivered: boolean;
  /** Em minutos. */
  preparationTimeEstimate: number;
  createdAt: Date;
}