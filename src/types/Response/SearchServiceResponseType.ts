import { IDrinkMain, IPizzaMain, ISideMain } from '../ProductTypes';

export interface SearchQueryReponseError {
  success: false;
  message: string;
}

export interface SearchQueryReponseSuccess {
  success: true;
  message: string;
  pagination: {
    limit: number;
    page: number;
    pagesCount: number;
  };
  result: (IDrinkMain | IPizzaMain | ISideMain)[];
}

export type SearchQueryResponse = SearchQueryReponseSuccess | SearchQueryReponseError;
