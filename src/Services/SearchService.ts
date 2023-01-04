import { BACKEND_URL } from '../Utils/vars';
import { SearchQueryResponse } from '../types/Response/SearchServiceResponseType';

class SearchService {
  async searchQuery(query: string): Promise<SearchQueryResponse> {
    try {
      if (!query) throw new Error('Відсутні параметри');

      const response = await fetch(`${BACKEND_URL}/search/?name=${query}`);
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
