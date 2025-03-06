const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === 'Api-publica-123') {
            next();
        } else {
            res.status(403).send("Api key no es correcto")
        }
    } catch (err) {
        res.status(403).send(err)

    }
}