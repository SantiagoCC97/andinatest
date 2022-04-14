# andinatest

Ejecute los servicios Apache y Mysql --  desde xampp Control

**** BASE DE DATOS ****
Entrar a phpmyadmmin Crear base de datos con el nombre: producto, posteriormente importar producto.sql (recibida en correo)


**** Deploy Project ****
clonar el repositorio andinatest a traves de github - https://github.com/SantiagoCC97/andinatest.git o descargar y extraerlo en la carpeta htdocs/andinatest
la ruta debería ser: xampp\htdocs\andinatest   --- Aquí debería estar las carpetas: backend, proyecto  y package-lock.json

**** Dar Acceso al backend a DB **** 
entrar en xampp\htdocs\andinatest\backend\ .env

** modificar según sus credenciales 

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=producto     
DB_USERNAME=root
DB_PASSWORD=
  
---------------
ejecutar 2 CMD y situarla en la siguientes rutas:
cmd1: -----      htdocs/andinatest/backend
cmd2: -----      htdocs/andinatest/proyecto
-------
en cmd1 ejecutar: php artisan serve
----------
en cmd2 ejecutar: ng serve

----------------------------------------------------
Utilizar aplicativo a traves de http://localhost:4200/producto/index
debería visualizar un registro de prueba.



