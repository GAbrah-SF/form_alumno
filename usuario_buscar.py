from flask import render_template, request
from conexion import mariadb_conexion
import mysql.connector as mariadb
from titulos import title3, titulo3, mensaje3
from fecha import fecha


def buscar_alumno():
    if request.method == "POST":
        try:
            buscador = request.form['buscador']

            with mariadb_conexion.cursor() as cursor:
                registros = "SELECT * FROM alumno WHERE usuario = '{}';".format(buscador)
                cursor.execute(registros)

                fila_alumno = cursor.fetchall()
                if fila_alumno:
                    return render_template("encontrado.html", title3=title3, titulo3=titulo3, fila_alumno=fila_alumno, fecha=fecha)
                else:
                    return render_template("encontrado.html", title3=title3, titulo3=titulo3, error=mensaje3)

            mariadb_conexion.commit()
            mariadb_conexion.close()

        except mariadb.Error as e:
            print("Error al conectar: ", e)