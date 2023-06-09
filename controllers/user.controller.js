const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
    try {
        const {body} = req;
        const createdUser = await User.create(body);
        res.status(201).send({data:createdUser});
    } catch (error) {
        next(error)
    }
}

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll({
            where: {
                firstName:'Elon'
            },
            attributes: {
                exclude: ['password']
            }
        });
        res.status(200).send({data:users});
    } catch (error) {
        next(error)
    }
}

module.exports.updateUser = async (req, res, next) => {
    try {
        const {body, params:{id}} = req;
        const [rows, [updateUser]] = await User.update(body, {
            where: {id},
            returning: true //['first_name', 'last_name', 'email']
        });
        updateUser.password = undefined;
        res.status(200).send({data:updateUser});
    } catch (error) {
        next(error)
    }
}

module.exports.updateUserInstance = async (req, res, next) => {
    try {
        const {body, params:{id}} = req;
        const userInstance = await User.findByPk(id);
        const updatedUser = await userInstance.update(body, {
            returning: true
        });
        updatedUser.password = undefined;
        res.status(200).send({data:updatedUser});
    } catch (error) {
        next(error)
    }
}