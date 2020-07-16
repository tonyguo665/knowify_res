\connect reservation;

CREATE TABLE IF NOT EXISTS reservations(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  email VARCHAR(40) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  size INT NOT NULL,
  table_num VARCHAR(40) NOT NULL,
  num_child INT NOT NULL DEFAULT 0,
  is_smoking BOOLEAN NOT NULL DEFAULT false,
  is_birthday BOOLEAN NOT NULL DEFAULT false,
  birthday_name VARCHAR(40) DEFAULT NULL,
  res_date_time TIMESTAMP NOT NULL,
);
