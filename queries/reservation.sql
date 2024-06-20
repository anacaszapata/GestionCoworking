
-- Un Usuario pueda reservar un espacio de trabajo en una sesión x.
insert into reservation (id, user_id, workspace_id, reservation_date, session_id, start_time, end_time) 
values (101, 1, 1, '2024-02-05 00:00:00', 1, '2024-02-06 00:00:00', '2024-02-06 00:00:00');


SELECT * FROM reservation where id= 101


