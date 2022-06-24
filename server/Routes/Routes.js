const route = require('express').Router()
const Usermodel = require('../Models/User')
const UserListModel = require('../Models/todoList')
const jwt = require('jsonwebtoken')
const secretkey = require('../secretKey/secretKey')

////////// get data of a user /////////
route.get('/:user', async (req, res) => {
    const owner = req.params.user
    const userTasks = await UserListModel.find({ owner }).exec()
    res.json(userTasks)
})


///////// signup /////////
route.post('/signup', async (req, res) => {
    const Data = new Usermodel(req.body)
    try {
        const userData = await Data.save()
        return res.status(200).json(userData)
    } catch (error) {
        res.status(201).json('duplicate username or email.')
    }
})



////// add task ////////
route.post('/add', verifyToken, async (req, res) => {

    jwt.verify(req.token, secretkey, async (err, authData) => {
        if (err) {
            return res.status(403)
        }
        else if (req.body.owner === authData.userName) {
            const Data = new UserListModel(req.body)
            try {
                const postData = await Data.save()
                return res.status(200).json(postData)
            } catch (error) {
                res.status(201).json("Duplicate data entered.")
            }
        }
        else {
            return res.sendStatus(403)
        }
    })

})


////// login ///////
route.post('/login', async (req, res) => {
    const { userName, password } = req.body
    try {
        const user = await Usermodel.findOne({ userName, password })
        if (user) {
            const { userName } = user._doc
            jwt.sign({ userName }, secretkey, (err, token) => {

                res.json({ userName, token })
            })

        }
    } catch (error) { console.log(error) }
})


///////// update check button //////////
route.put('/update/:id', async (req, res) => {
    const checked = req.body.checked
    const id = req.params.id
    const dataWithId = await UserListModel.findByIdAndUpdate(id, { checked }, { new: true })
    res.json(dataWithId)
})


///////// delete task ////
route.delete('/:id', async (req, res) => {
    const id = req.params.id
    const deletedTask = await UserListModel.findByIdAndDelete(id)
    jwt.sign({ userName }, secretkey, (err, token) => {

        res.json({ userName, token })
    })
    res.json('Task Deleted.')

})


/// verify jsonwebtoken///
function verifyToken(req, res, next) {
    const bearerHeader = req.body.auth.authorization
    if (typeof bearerHeader !== 'undefined') {
        const accessToken = bearerHeader.split(' ')[1]
        req.token = accessToken
        next()

    } else {
        res.sendStatus(403)
    }

}

module.exports = route


