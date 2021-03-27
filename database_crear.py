from conexion import mariadb_conexion
import mysql.connector as mariadb
from flask import request


def crear_DataBase():
    global base_datos
    try:
        base_datos = request.form['nomBaseDatos']

        with mariadb_conexion.cursor() as cursor:
            cursor.execute("CREATE DATABASE IF NOT EXISTS {};".format(base_datos))
            return f"Base de datos:\n{base_datos}\nCreada Exitosamente!!!"
        cursor.commit()
        cursor.close()

    except mariadb.Error:
        return f"No se pudo crear la base de Datos:\n{base_datos}!!!"
