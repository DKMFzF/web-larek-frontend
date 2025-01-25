import { IView } from '../../base/View';
// import { TItemId } from '../../model/ProductAPI';

export type TElementsMap = Record<string, HTMLElement>;

export interface IItemData {
    id: string;
}

export interface IListData<T> {
    items: T[];
    // message?: string;
}

export interface IListSettings<T> {
    item: IView<T, unknown>;
    // message: string;
    activeItemClass: string;
    itemClass: string;
}
