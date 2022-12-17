const db = require('../config/database')


const createNewUser = (req, res) => {
     try {
          db.query('INSERT INTO user SET name = ?, email = ?', [req.body.name, req.body.email], (error, data) => {
               res.status(200).json({
                    message: 'datanya masuk pak',
                    data: req.body
               })
          })
     } catch (error) {
          if (Error) throw error
     }
}

const getAllUser = (req, res) => {
     try {
          db.query('SELECT * FROM user', (error, data) => {
               res.status(200).json({
                    message: 'datanya ada nih pak',
                    data: data
               })
          })
     } catch (error) {
          if (error) throw error
     }
}

const getUserById = (req, res) => {
     const id = req.params.id;
     try {
          db.query('SELECT * FROM user WHERE id = ?', [id], (error, data) => {
               res.status(200).json({
                    message: 'datanya ada pak',
                    data: data
               })
          })
     } catch (error) {
          if (error) throw error
     }
}

const updateUser = (req, res) => {
     let edit = {
          name: req.body.name,
          email: req.body.email
     }
     const id = req.params.id;
     try {
          db.query('UPDATE user SET ? WHERE id = ?', [edit, id], (error, data) => {
               res.status(200).json({
                    message: 'berhasil pak',
                    data: req.body
               })
          })
     } catch (error) {
          if (error) throw error
     }
}

const deleteUser = (req, res) => {
     const id = req.params.id;
     try {
          db.query('DELETE FROM user WHERE id = ?', [id], (error, data) => {
               res.status(200).json({
                    message: 'berhasil pak',
                    data: data
               })
          })
     } catch (error) {
          if (error) throw error
     }
}



module.exports = {
     createNewUser,
     getAllUser,
     getUserById,
     updateUser,
     deleteUser
}