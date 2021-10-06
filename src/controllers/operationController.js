const operationController = {
    async operation(req, res) {
        try {
            

            res.status(202).send();
        } catch (error) {
            global.loggererror.error(error.message);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    }
};

module.exports = operationController;