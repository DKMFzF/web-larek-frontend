export interface IApiListResponse<Type> {
    items: Type[];
    total: number;
}

// export type TItemId = string;
export interface IProduct {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
    price: number | null;
}

export type TPaymentMethod = 'card' | 'cash' | null;
export interface IOrderMethod {
    payment: TPaymentMethod;
    address: string;
}

export interface IContacts extends IOrderMethod {
    email: string;
    phone: string;
}

export interface IOrder extends IContacts {
    total: number;
    items: string[];
}

export interface IOrderResult {
    id: string;
    total: number;
}

export interface IProductAPI {
    getProducts: () => Promise<IProduct[]>;
	getProduct: (id: string) => Promise<IProduct>;
	orderProducts: (order: IOrder) => Promise<IOrderResult[]>;
}
