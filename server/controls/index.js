const model = require("../models");

module.exports = {
  getAll: (req, res) => {
    let timeStart = req.query.timeStart;
    let timeEnd = req.query.timeEnd;
    model
      .getAll(timeStart, timeEnd)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  post: (req, res) => {
    let data = req.body;
    model
      .post(data)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  delete: (req, res) => {
    data = req.query.id;
    model
      .delete(data)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getOne:(req,res)=>{
    let data = Object.entries(req.query);
    model.getOne(data)
    .then((data)=>{
        res.send(data.rows)
    })
    .catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
  },
  getTables:(req,res)=>{
    let section = req.query.section;
    model.getTables(section)
    .then((data)=>{
      res.send(data.rows);
    })
    .catch((err)=>{
      console.log(err);
      res.sendStatus(500);
    })
  }
};