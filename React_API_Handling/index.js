import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/products', (req, res) => {

    const products = [
        {
            id: 1,
            name: "table wooden",
            price: 200,
            image: "https://cdn.prod.website-files.com/64022de562115a8189fe542a/6616718fe4a871d7278a2037_Product-Concept-What-Is-It-And-How-Can-You-Best-Use-It.jpg"
        },
        {
            id: 2,
            name: "table glass",
            price: 200,
            image: "https://cdn.prod.website-files.com/64022de562115a8189fe542a/6616718fe4a871d7278a2037_Product-Concept-What-Is-It-And-How-Can-You-Best-Use-It.jpg"
        },
        {
            id: 3,
            name: "summer",
            price: 200,
            image: "https://cdn.prod.website-files.com/64022de562115a8189fe542a/6616718fe4a871d7278a2037_Product-Concept-What-Is-It-And-How-Can-You-Best-Use-It.jpg"
        },
        {
            id: 4,
            name: "glock",
            price: 200,
            image: "https://cdn.prod.website-files.com/64022de562115a8189fe542a/6616718fe4a871d7278a2037_Product-Concept-What-Is-It-And-How-Can-You-Best-Use-It.jpg"
        }
    ];
    
    // How to handle apis like this
    // http://localhost:3000/api/products?search=metal
    // using req.query.requestName

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search));
        res.send(filterProducts);
        return;
        // after sending res you have to exit this method to avoid app crash
    }

    // Hit this url: http://localhost:3000/api/products?search=summer

    setTimeout(() => {
        res.send(products);
    }, 2000);

    res.send(products);
    // simulate the api to delay
});

app.listen(port, () => {
    console.log(`Server listning on port ${port}`);
})