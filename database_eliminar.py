import mysql.connector as mariadb
from conexion import mariadb_conexion


def eliminar_DataBase():
    try:
        database_eliminar = "" # Agrega entre las comillas el nombre de la base de datos que quieres eliminar
        with mariadb_conexion.cursor() as cursor:
            cursor.execute("DROP DATABASE IF EXISTS {};".format(database_eliminar))
            cursor.close()

        print(f"Base de Datos {database_eliminar} Eliminada!!!")

    except mariadb.Error as e:
        print(f"Error al conectar {e}")


if __name__ == '__main__':
    eliminar_DataBase()