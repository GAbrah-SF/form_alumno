from conexion import mariadb_conexion
from flask import render_template
import mysql.connector as mariadb
from titulos import title2, titulo2
from fecha import fecha


def consulta_alumno():
    try:
        with mariadb_conexion.cursor() as cursor:
            # Recuperar registros de la tabla 'Usuarios'
            registros = "SELECT * FROM alumno;"

            # Mostrar registros
            cursor.execute(registros)
            fila_alumno = cursor.fetchall()
            return render_template("alumnos.html", title2=title2, titulo2=titulo2, fila_alumno=fila_alumno, fecha=fecha)

        # Finalizar
        mariadb_conexion.commit()
        mariadb_conexion.close()

    except mariadb.Error:
        return "ERROR AL CARGAR LISTA DE ALUMNOS"