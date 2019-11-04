from django.db import models

class Instrument(models.Model):
    user = models.ForeignKey(
        'User',
        on_delete = models.CASCADE
    )
    name = models.CharField(max_length = 20)
    sensor = models.ForeignKey(
        to='Sensor',
        on_delete = models.CASCADE
    )


    def __str__(self):
        return self.name + " " + self.user

class User(models.Model):
    name = models.CharField(max_length = 220)

    def __str__(self):
        return self.name

class Sensor(models.Model):
    name = models.CharField(max_length = 200)

    def __str__(self):
        return self.name

class TimeSeriesDatum(models.Model):
    sensor = models.ForeignKey(
        'Sensor',
        on_delete = models.CASCADE
    )
