import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) {}

  /**
   * Used to fetch the product list.
   * @param filterParams - holds the filter params used to fetch the product list.
   * @returns - the product list.
   */
  getProductList(filterParams: {searchText: string, start: number}) {
    const queryParams = {
      searchTerm: filterParams.searchText,
      start: filterParams.start,
      itemPerPage: 24
    }
    // Below API returns CORS error
    return this.http.get('https://www.blibli.com/backend/search/products?searchTerm=samsung&start=0&itemPerPage=24')
  }
}
