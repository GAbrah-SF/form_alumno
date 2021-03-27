from conexion import mariadb_conexion
import mysql.connector as mariadb
from flask import request
from titulos import mensaje5, mensaje6


def eliminar_alumno():
    if request.method == "POST":
        try:
            eliminar = request.form["id_user"].lower()

            with mariadb_conexion.cursor() as cursor:
                registro = "DELETE FROM alumno WHERE usuario = '{}'".format(eliminar)
                cursor.execute(registro)

            mariadb_conexion.commit()
            return mensaje5

        except mariadb.Error:
            return mensaje6