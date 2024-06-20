-- Un usuario pueda cancelar una reserva.

alter table reservation add column if not exists status varchar(255)

update reservation set status= 'VIGENTE' where status ISNULL

update reservation set status = 'CANCELADA' where id= 101

select * from reservation where id= 101

select status, COUNT(id) AS cantidad from reservation GROUP BY status