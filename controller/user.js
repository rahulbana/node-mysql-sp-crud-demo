const tblName = 'customer'

const userController = ( ()=> {
  return {
    addCustomer: async (req, res) => {
      try {
        req.getConnection(function(err, connection) {
          const { name, address, email, phone } = req.body;
          connection.query(`CALL createCustomer(?, ?, ?, ?)`, [name, address, email, phone], function(err, result) {
            if(err) throw err
            
            console.log('affected rows', result.affectedRows)
            return res.status(201).json({status: true, msg: "New Customer Created"});
          });
        });
      } catch(err) {
        return res.status(400).json({status: false, msg: err});
      }
    },
    updateCustomer: async (req, res) => {
      try {
        const { id } = req.params;
        req.getConnection(function(err, connection) {
          const { name, address, email, phone } = req.body;
          connection.query(`CALL updateCustomer(?, ?, ?, ?, ?)`, [id, name, address, email, phone],  function(err, result) {
            if(err) throw err
            
            console.log('affected rows', result.affectedRows)
            return res.status(202).json({status: true, msg: "Customer Updated"});
          });
        });
      } catch(err) {
        return res.status(400).json({status: false, msg: err});
      }
    },
    deleteCustomer: async (req, res) => {
      try {
        const { id } = req.params;
        req.getConnection(function(err, connection) {
          connection.query("CALL deleteCustomer(?)", [id],  function(err, result) {
            if(err) throw err
            
            console.log('affected rows', result.affectedRows)
            return res.status(202).json({status: true, msg: "Customer Deleted"});
          });
        });
      } catch(err) {
        return res.status(400).json({status: false, msg: err});
      }
    },
    getAll: async (req, res) => {
      try {
        req.getConnection(function(err, connection) {
          connection.query(`CALL selectAll()`, function(err, result) {
            if(err) throw err

            const rows = result[0]
            return res.status(200).json({status: true, users: rows});
          });
        });
      } catch(err) {
        return res.status(400).json({status: false, msg: err});
      }
    },
    getById: async (req, res) => {
      try {
        req.getConnection(function(err, connection) {
          const { id } = req.params;
          connection.query(`CALL selectById(?)`, id, function(err, result) {
            if(err) throw err
       
            const rows = result[0]
            return res.status(200).json({status: true, user: rows[0]});
          });
        });
      } catch(err) {
        return res.status(400).json({status: false, msg: err});
      }
    }
  }
})()

module.exports = userController
