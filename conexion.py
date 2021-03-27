import mysql.connector as mariadb

try:
    # Agrega en seguida tus credenciales:
    credenciales = {
        "port": 0000, # El Número de puerto va sin comillas
        "host": "localhost", # Por lo general es localhost
        "user": "", # Por lo general es root
        "password": "", # En caso de tener alguna Contraseña en su usuario
        "database": "" # Agrega el nombre de la base de datos que creastes y con la que vas a trabajar
    }
    mariadb_conexion = mariadb.connect(**credenciales)
    cursor = mariadb_conexion.cursor()
    # print(f"Conexión Establecida!!!")

except mariadb.Error as e:
    print(f"Error al conectar {e}")