

module.exports = {
    create(req, res, next) {
        const dbInstance = req.app.get('db');

        //use object destructuring here for cleaner code --> const {name, descripttion, price, imageurl} = req.body;

        dbInstance.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl])
        .then( () => res.status(200).send() )
        .catch(() => res.status(500).send());
    },
    getAll(req, res, next) {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
        .then( products => res.status(200).send(products))
        .catch( () => res.status(500).send());
    },
    getOne(req, res, next) {
        const dbInstance = req.app.get('db');
        // const {params} = req;
        console.log("req:",req);
        console.log("req.params.id", req.params.id);
        dbInstance.read_product(req.params.id)
        .then( product => res.status(200).send(product))
        .catch(() => res.status(500).send());
    },
    update(req, res, next) {
        const dbInstance = req.app.get('db');

        dbInstance.update_product([req.params.id, req.query.desc])
        .then(()=> res.status(200).send())
        .catch(()=> res.status(500).send());
    },
    delete( req, res, next) {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product([req.params.id])
        .then(()=> res.status(200).send())
        .catch(()=> res.status(500).send());
    }
}


// can use object destructuring in any of these functions on the 'req' object --> const {...} = req.body or const {...} = req;