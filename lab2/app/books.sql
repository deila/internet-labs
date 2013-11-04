create sequence books_id_seq;

create table books(
  id integer primary key default nextval('books_id_seq'),
  title varchar(50),
  theme varchar(50),
  author text,
  year integer,
  publisher varchar(50)
);

