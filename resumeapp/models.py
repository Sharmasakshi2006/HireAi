from django.db import models

class Resume(models.Model):

    name = models.CharField(max_length=100)

    resume = models.FileField(upload_to='resumes/')

    def __str__(self):
        return self.name