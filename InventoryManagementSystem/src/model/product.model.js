export default class productModel{
    constructor(_id,_name,_desc,_price,_imageurl){
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imageUrl = _imageurl;
    }
    static getAll(){
        return products;
    }
    static add(productObj,imagePath){
        let newProduct = new productModel(
            products.length+1,
            productObj.name,
            productObj.desc,
            productObj.price,
            imagePath
        )
        products.push(newProduct)
    }
    static getByID(id){
        return products.find((product)=>product.id==id);
    }
    static update(productObj){
        const index = products.findIndex((p)=>p.id==productObj.id);
        products[index] = productObj;
    }
    static delete(id){
        const index=products.findIndex((p)=>p.id==id);
        if (index === -1) {
            throw new Error('Product not found'); // Or handle this case appropriately
        }
        products.splice(index,1);
        products.forEach((p,index)=>{
            p.id=index+1;
        })
    }
}

var products = [
    new productModel(
        1,
        'product1',
        'product1 description',
        125,
        'https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg'
    ),
    new productModel(
        2,
        'product2',
        'product2 description',
        205,
        'https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg'
    ),
    new productModel(
        3,
        'product3',
        'product3 description',
        150,
        'https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg'
    ),
]