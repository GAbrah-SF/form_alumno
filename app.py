from flask import Flask, render_template
from usuario_guardar import guardar_alumno
from usuario_lista import consulta_alumno
from usuario_buscar import buscar_alumno
from usuario_actualizar import actualizar_alumno
from usuario_eliminar import eliminar_alumno
from database_crear import crear_DataBase
from database_mostrar import mostrar_DataBase
from titulos import title, titulo1
from fecha import fecha


app = Flask(__name__)
verdad = True
puerto = 1717


@app.route('/')
def home():
    return render_template("formulario.html", title=title, titulo1=titulo1, fecha=fecha)


@app.route('/alumnos_itsp')
def alumnos_itsp():
    return consulta_alumno()


@app.route('/guardar', methods=["GET", "POST"])
def act():
    return guardar_alumno()


@app.route('/alumno_localizado', methods=["GET", "POST"])
def act2():
    return buscar_alumno()


@app.route('/eliminar', methods=["GET", "POST"])
def act3():
    return eliminar_alumno()


@app.route('/actualizar', methods=["GET", "POST"])
def act4():
    return actualizar_alumno()


@app.route('/DBcreada', methods=["GET", "POST"])
def act5():
    return crear_DataBase()


@app.route('/DataBases')
def DataBases():
    return mostrar_DataBase()


if __name__ == '__main__':
    app.run(debug=verdad, port=puerto)
