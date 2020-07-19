const { client: db } = require("./db");

module.exports = {
  getAll: (timeStart, timeEnd) => {
    //expect time format to be yyyy-mm-dd hh-mm-ss
    let query = `select * from reservations where res_date_time between '${timeStart}' and '${timeEnd}'`;
    return db.query(query);
  },
  post: (queryData) => {
    let query = `insert into reservations(
        first_name, 
        last_name, 
        email, 
        phone, 
        size, 
        table_num, 
        num_child, 
        is_smoking, 
        is_birthday, 
        birthday_name, 
        res_date_time) 
    values('${queryData.first_name}',
        '${queryData.last_name}',
        '${queryData.email}',
        '${queryData.phone}',
        '${queryData.size}',
        '${queryData.table_num}',
        '${queryData.num_child}',
        '${queryData.is_smoking}',
        '${queryData.is_birthday}',
        '${queryData.birthday_name}',
        '${queryData.res_date_time}')`;
    return db.query(query);
  },
  delete:(data)=>{
      let query = `delete from reservations where id = '${data}'`
      return db.query(query);
  },
  getOne:(data)=>{
    let query = `select * from reservations where ${data[0][0]} = '${data[0][1]}'`
    return db.query(query);
  },
  getTables:(section)=>{
    let query = `select * from tables where section = '${section}'`;
    return db.query(query);
  }
};
