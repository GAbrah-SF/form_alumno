from datetime import datetime

def current_date_format(date):
    dias = ("Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo")
    meses = ("Enero", "Febrero", "Marzo", "Abri", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")

    nom_dia = dias[date.isoweekday() - 1]
    dia = date.day
    mes = meses[date.month - 1]
    year = date.year
    mensaje = "{}, {} de {} de {}".format(nom_dia,dia, mes, year)

    return mensaje

now = datetime.now()
fecha = current_date_format(now)