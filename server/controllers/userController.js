const {User} = require("../models")

const userController = {
    getOne: async (req, res, next) => {
        try {
            const user = await User.findByPk(req.params.id)
            res.status(200).send(user)
        } catch (err) {
            next(err)
        }
    },
    getAll: async (req, res, next) => {
        try {
            const users = await User.findAll();
            res.status(200).send(users)
        } catch (err) {
            next(err)
        }
    },
    register: async (req, res, next) => {
        try {
            const user = await User.create(req.body);
            res.status(201).send(user)
        } catch (err) {
            next(err)
        }
    },
    login: async (req, res, next) => {
        try {
          const { mail, password } = req.body;
          const userFound = await User.findOne({
            where: {
              mail,
            },
          });
          if (!userFound || !userFound.validatePassword(password)) {
            res
              .status(401)
              .send(
                'El email no está registrado en la DB o la contraseña es incorrecta',
              );
          }
          jwt.sign(
            {
              id: userFound.id,
              mail: userFound.mail,
              admin: userFound.admin,
            },
            "alkemy",
            (err, token) => res.json(token),
          );
        } catch (error) {
          next(error)
        }
      },
}

module.exports = userController;