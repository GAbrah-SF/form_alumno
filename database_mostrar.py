from conexion import mariadb_conexion
from flask import render_template
from titulos import title4, titulo4
import mysql.connector as mariadb


def mostrar_DataBase():
    try:
        with mariadb_conexion.cursor() as cursor:
        # Mostrar registros
            cursor.execute("SHOW DATABASES")
            filaDB = cursor.fetchall()
            return render_template("base_datos.html", filaDB=filaDB, title4=title4, titulo4=titulo4)

        # Finalizar
        cursor.commit()
        cursor.close()

    except mariadb.Error as e:
        print(f"Error al conectar {e}")
