-- Ver las sesiones con orden por las más ocupadas.
SELECT s.id, s.name, COUNT(s.id) AS quantity
FROM session s 
JOIN reservation r ON r.session_id = s.id
GROUP BY s.id
ORDER BY quantity DESC
LIMIT 12