export type formInventoryDataType = {
    id: number,
    productName: string,
    productSku: string,
    productPrice: number,
    productQuantity: number,
    productCategory: string,
    productTags: string[],
    stockStatus: string,
    productDescription: string,
    size: string,
    color: string,
    material: string,
    brand: string,
    season: string,
    occasion: string,
    fit?: string,
    care?: string
}

export const categoryList = ["Dresses", "Tops", "Bottoms", "Outerwear", "Accessories", "Shoes", "Bags"];
export const tagList = ["New Arrival", "Sale", "Trending", "Limited Edition", "Exclusive", "Sustainable"];
export const stockList = ["In Stock", "Out of Stock", "Limited Stock"];
export const sizeList = ["XS", "S", "M", "L", "XL", "XXL"];
export const colorList = ["Black", "White", "Red", "Blue", "Green", "Pink", "Yellow", "Gray", "Beige"];
export const materialList = ["Cotton", "Silk", "Wool", "Polyester", "Linen", "Denim", "Leather", "Cashmere"];
export const seasonList = ["Spring", "Summer", "Fall", "Winter", "All Season"];
export const occasionList = ["Casual", "Formal", "Party", "Business", "Sport", "Beach", "Date Night"];
export const fitList = ["Slim Fit", "Regular Fit", "Oversized", "Tailored", "Relaxed Fit"];
export const careList = ["Dry Clean Only", "Machine Wash", "Hand Wash", "Spot Clean"];