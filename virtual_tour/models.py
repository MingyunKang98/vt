from django.db import models
from projects.models import Project

class Panorama(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="panoramas")
    image = models.ImageField(upload_to="panoramas/")
    date = models.DateField(auto_now_add=True)  # ��¥ ���� �ʵ� �߰�

    def __str__(self):
        return f"{self.project.title} - {self.date}"