-- Ver la lista de espacios de trabajo asignados a una sesión.

SELECT w.id, w.name 
FROM workspace w
JOIN reservation r ON r.workspace_id = w.id
JOIN session s ON s.id = r.session_id
WHERE s.id = 1
