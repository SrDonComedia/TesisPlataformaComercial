export class OneProductosModel {
    public productos: {
        'id': string,
        'sku': string,
        'user_id': string,
        'name': string,
        "price": string,
        "description": string,
        "image": string,
        "thumnail": string,
        "category": string,
        "create_date": string,
        "status": boolean,
        "calification": string
    }[];
}