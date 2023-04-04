const {Task} = require('../models');

module.exports.createTask = async(req, rest, next) => {
    try {
        const {body, params:{id}} = req;
        const task = await Task.create({...body, userId: id});
        rest.status(201).send();
    } catch (error) {
        next(error)
    }
}