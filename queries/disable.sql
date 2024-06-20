-- Ver la lista de espacios de trabajo ocupados de una sala en una sesión x.
SELECT w.id, w.name 
FROM workspace w 
LEFT JOIN reservation r ON r.workspace_id = w.id 
LEFT JOIN session s ON s.id = r.session_id 
WHERE w.rooms_id = 1 
AND s.id = 1
LIMIT 10

