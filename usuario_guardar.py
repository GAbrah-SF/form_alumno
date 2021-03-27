from conexion import mariadb_conexion
import mysql.connector as mariadb
from flask import request
from titulos import mensaje1, mensaje2


def guardar_alumno():
    if request.method == "POST":
        try:
            usuario = request.form['usuario']
            nombre = request.form['nombre']
            apellidos = request.form['apepat']+" "+request.form['apemat']
            email = request.form['email']
            password = request.form['password']
            fecha = request.form['fecha']
            hora = request.form['hora']

            with mariadb_conexion.cursor() as cursor:
                registro_alumno = "INSERT INTO alumno VALUES ('{}','{}','{}','{}','{}','{}','{}')".format(usuario, nombre, apellidos, email, password, fecha, hora)
                cursor.execute(registro_alumno)

            mariadb_conexion.commit()
            return mensaje1

        except mariadb.Error:
            return mensaje2