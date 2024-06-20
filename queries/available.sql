-- Ver la lista de espacios de trabajo disponibles de una sala en una sesión x.
SELECT w.id, w.name 
FROM workspace w 
LEFT JOIN reservation r ON r.workspace_id = w.id 
LEFT JOIN session s ON s.id = r.session_id 
WHERE w.rooms_id = 1 
AND s.id = 1
AND r.workspace_id ISNULL


SELECT * FROM workspace limit 1


SELECT * FROM session limit 1