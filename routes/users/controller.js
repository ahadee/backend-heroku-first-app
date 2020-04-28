const users = require("../../models/users")

module.exports = {
    getAll: (req, res) => {
        try {
            res.status(200).json({ data: users, message: "Get All Data Users" });
        } catch (error) {
            res.json(error);
        }
    },
    addUser: (req,res) => {
        try {
            const {name, address} = req.body
            // console.log(body);
            const newUser = {
                id: users.length + 1,
                name,
                address,
            }
            users.push(newUser)
            console.log(newUser);
            
            
            res.status(200).json({ 
                message: "Create new data is Successfully", 
                data: users 
            });
        } catch (error) {
            res.json(error);
            // console.log(error);
            
        }
    },
    editUser: (req,res) => {
        try {
            const id= req.params.id
            const {name,address} =req.body

            const editUser = {
                id: Number(id),
                name,
                address
            }

            users.splice(id-1,1,editUser)

            res.status(200).json({
                message: "User is Successfully Changes",
                data: users
            })
        } catch (error) {
            res.json(error)
        }
    },
    filterByAddress: (req,res) => {
        const {address} = req.query
        const filteredUser = users.filter((element) => {
            return element.address.toLowerCase() === address.toLowerCase()
        })

        res.status(200).json({
                message: "Get Data Filter By Address",
                data: filteredUser
        })
    },
    findByID: (req,res) => {
        // console.log(req.params);
        const {id} = req.params
        
        const filteredID = users.filter((element) => {
            return element.id == id
        })

        res.status(200).json({
            message: "Get Data Filter By ID",
            data: filteredID
        })
    },

    deleteAll: (req,res) => {
        res.status(200).json({
            message: "Get Data Filter By ID",
            data: []
        })

    },
    deleteByID: (req,res) => {
        // const index = req.params.id
        const {id} = req.params
        users.splice(id-1,1)

        res.status(200).json({
            message: "Get Data Filter By ID",
            data: users
        })

    }

}

