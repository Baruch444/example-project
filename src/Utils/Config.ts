
class Config{
    public productsUrl = "http://localhost:3030/api/products/";
    public registerUrl = "http://localhost:3030/api/register/";
    public loginUrl = "http://localhost:3030/api/login/";
    public categoriesUrl = "http://localhost:3030/api/categories/";
}
const appConfig = new Config(); // Singleton
export default appConfig;
