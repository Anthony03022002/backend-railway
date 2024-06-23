from django.db import models

# Create your models here.
class Clientes(models.Model):
    cedula = models.IntegerField()
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    celular = models.CharField(max_length=20)
    direccion = models.CharField(max_length=250)

    class Meta:
        db_table = 'clientes'
    def __str__(self):
        return self.nombre