/**
 *
 *  type Lemonade = {
 *   lemon: number;
 *   water: string;
 *  }
 *
 *
 *  const SweetLemonade:Lemonade = {
 *    lemon: 2,
 *    water: '1litres',
 *    sugar: '3tbsp'
 *  }
 *  This would throw an error saying 'sugar' does not exist in type 'Lemonade'
 *
 *
 *
 *  const SweetLemonade:Extends<Lemonade> = {
 *    lemon: 2,
 *    water: '1litres',
 *    sugar: '3tbsp'
 *  }
 *  This would not throw an error anymore and you will still get the type suggestions
 *  for Lemonade type
 *
 */
export type Extend<T extends { [key: string]: any }> = T & {
	[key: string]: any;
};
