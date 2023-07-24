(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {
        getProduct(id: number) {
            console.log('Producto: ', {id, name: 'OLED Tv'});
        }

        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }
    }

    class Mailer {
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    }

    class MailerMock {
        notifyClients() {
            console.log('Enviando correo a los clientes de un mockeo');
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        // private httpAdapter: Object;
        constructor(private readonly productService: ProductService, private readonly mailer: Mailer) {}

        loadProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
           this.productService.getProduct(id)
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos
           this.productService.saveProduct(product)
        }

        notifyClients() {
           this.mailer.notifyClients()
        }

    }

    class CartBloc {
        private itemsInCart: Object[] = []

        onAddToCart(productId: number) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
            this.itemsInCart.push(productId)
            console.log(this.itemsInCart)
        }
    }

    const productService = new ProductService()
    const mailer = new Mailer()
    const mailerMock  = new MailerMock()

    const productBloc = new ProductBloc(productService,mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({id: 10, name: 'OLED TV'});
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);
    cartBloc.onAddToCart(20);


})();