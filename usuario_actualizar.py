from conexion import mariadb_conexion
import mysql.connector as mariadb
from flask import request
from titulos import mensaje7, mensaje8


def actualizar_alumno():
    if request.method == "POST":
        try:
            usuario = request.form['act_usuario']
            nombres = request.form['act_nombre']
            apellidos = request.form['act_apepat']
            email = request.form['act_email']
            fecha = request.form['act_fecha']
            hora = request.form['act_hora']

            with mariadb_conexion.cursor() as cursor:
                actualizar = "UPDATE alumno SET nombre='{}', apellidos='{}', email='{}', fecha_registro='{}', hora='{}' WHERE usuario = '{}';".format(nombres, apellidos, email, fecha, hora, usuario)
                cursor.execute(actualizar)

            mariadb_conexion.commit()
            return mensaje7

        except mariadb.Error:
            return mensaje8