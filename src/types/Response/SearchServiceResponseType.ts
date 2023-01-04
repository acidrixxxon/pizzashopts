import { IDrinkMain, IPizzaMain, ISideMain } from '../ProductTypes';

export interface SearchQueryReponseError {
  success: false;
  message: string;
}

export interface SearchQueryReponseSuccess {
  success: true;
  message: string;
  result: (IDrinkMain | IPizzaMain | ISideMain)[];
}

export type SearchQueryResponse = SearchQueryReponseSuccess | SearchQueryReponseError;
