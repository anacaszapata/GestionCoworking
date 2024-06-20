-- Ver la lista de espacios de trabajo asignados a un usuario.

SELECT w.id, w.name 
FROM workspace w
JOIN reservation r ON r.workspace_id = w.id
WHERE r.user_id = 1