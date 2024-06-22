# SQL Queries Coworking

## Contexto

Esta carpeta contiene varios queries SQL diseñados para resolver diferentes necesidades de datos en nuestra base de datos. Los queries están estructurados y optimizados para obtener información específica y asegurar una ejecución eficiente. 

### Instrucciones de Uso

Para ejecutar los queries SQL en esta carpeta, necesitarás configurar tus credenciales de base de datos. Se recomienda utilizar variables de entorno para mantener las credenciales seguras y evitar exponerlas directamente en el código.

#### Variables de Entorno

Configuración Local
Para ejecutar el proyecto localmente, clona el repositorio y configura las variables de entorno necesarias para la base de datos.

Clona el repositorio:
git clone https://github.com/anacaszapata/gestionCoworking.git
cd coworking

Instala las dependencias necesarias:
npm install

Copia el archivo .env.example a un nuevo archivo .env y configura las variables de entorno necesarias:
cp .env.example .env

Edita el archivo .env y configura los siguientes valores:

DB_NAME=tu_nombre_de_base_de_datos
DB_USER=tu_usuario_de_base_de_datos
DB_PASS=tu_contraseña_de_base_de_datos
DB_HOST=tu_host_de_base_de_datos
DB_PORT=tu_puerto_de_base_de_datos

Ejecuta los Scripts que estan en la carpeta scripts de create y tables, si es necesario también utuliza los queries para hacer población y pruebas en tu base de datos.

Para correr el proyecto:
npm run start:dev
