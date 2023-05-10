import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creatediet'
})
export class CreatedietPipe implements PipeTransform {

  transform(products: any[], filters: any): any[] {
    let filteredProducts = products;

    if (filters.vegetables) {
      filteredProducts = filteredProducts.filter((product) => product.category === 'vegetables');
    }

    if (filters.fruits) {
      filteredProducts = filteredProducts.filter((product) => product.category === 'fruits');
    }

    if (filters.dairy) {
      filteredProducts = filteredProducts.filter((product) => product.category === 'dairy');
    }

    if (filters.nuts) {
      filteredProducts = filteredProducts.filter((product) => product.category === 'nuts');
    }

    if (filters.meat) {
      filteredProducts = filteredProducts.filter((product) => product.category === 'meat');
    }

    return filteredProducts;
  }

}
