import { BACKEND_URL } from '../Utils/vars';
import { IPagination } from '../types/OtherTypes';
import { SearchQueryResponse } from '../types/Response/SearchServiceResponseType';

class SearchService {
  async searchQuery(query: string, page = 1, limit = 3): Promise<SearchQueryResponse> {
    try {
      if (!query) throw new Error('Відсутні параметри');

      const response = await fetch(`${BACKEND_URL}/search/?name=${query}&limit=${limit}&page=${page}`);
      const data = await response.json();

      return data;
    } catch (error: any) {
      return {
        message: error.message,
        success: false,
      };
    }
  }
}

export default new SearchService();
