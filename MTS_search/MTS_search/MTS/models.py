from django.db import models

class Department(models.Model):
    department_name = models.CharField("Название отдела", max_length=100)
    location = models.CharField("Местоположение", max_length=100, blank=True, null=True)
    manager = models.ForeignKey(
        'Employee',
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='managed_departments',
        verbose_name="Руководитель отдела"
    )

    def __str__(self):
        return self.department_name

    class Meta:
        verbose_name = "Отдел"
        verbose_name_plural = "Отделы"

class Employee(models.Model):
    GENDER_CHOICES = [
        ('M', 'Мужской'),
        ('F', 'Женский'),
    ]

    first_name = models.CharField("Имя", max_length=50)
    last_name = models.CharField("Фамилия", max_length=50)
    department = models.ForeignKey(
        Department,
        on_delete=models.CASCADE,
        verbose_name="Отдел",
        related_name='employees'
    )
    job_title = models.CharField("Должность", max_length=100, blank=True, null=True)
    email = models.EmailField("Электронная почта", unique=True)
    phone_number = models.CharField("Номер телефона", max_length=20, blank=True, null=True)
    hire_date = models.DateField("Дата приема на работу", blank=True, null=True)
    manager = models.ForeignKey(
        'self',
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='subordinates',
        verbose_name="Непосредственный начальник"
    )
    date_of_birth = models.DateField("Дата рождения", blank=True, null=True)
    address = models.CharField("Адрес", max_length=255, blank=True, null=True)
    salary = models.DecimalField("Зарплата", max_digits=10, decimal_places=2, blank=True, null=True)
    gender = models.CharField("Пол", max_length=1, choices=GENDER_CHOICES, blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = "Сотрудник"
        verbose_name_plural = "Сотрудники"

class Task(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'В ожидании'),
        ('In Progress', 'В процессе'),
        ('Completed', 'Выполнено'),
    ]

    PRIORITY_CHOICES = [
        ('Low', 'Низкий'),
        ('Medium', 'Средний'),
        ('High', 'Высокий'),
    ]

    task_name = models.CharField("Название задачи", max_length=200)
    description = models.TextField("Описание задачи", blank=True, null=True)
    assigned_to = models.ForeignKey(
        Employee,
        on_delete=models.CASCADE,
        related_name='tasks',
        verbose_name="Назначено сотруднику"
    )
    assigned_by = models.ForeignKey(
        Employee,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='assigned_tasks',
        verbose_name="Назначено сотрудником"
    )
    start_date = models.DateField("Дата начала", blank=True, null=True)
    due_date = models.DateField("Срок выполнения", blank=True, null=True)
    status = models.CharField("Статус", max_length=20, choices=STATUS_CHOICES, default='Pending')
    priority = models.CharField("Приоритет", max_length=10, choices=PRIORITY_CHOICES, default='Medium')

    def __str__(self):
        return self.task_name

    class Meta:
        verbose_name = "Задача"
        verbose_name_plural = "Задачи"

class EmployeeHierarchyClosure(models.Model):
    ancestor = models.ForeignKey(
        Employee,
        related_name='descendant_set',
        on_delete=models.CASCADE,
        verbose_name="Предок"
    )
    descendant = models.ForeignKey(
        Employee,
        related_name='ancestor_set',
        on_delete=models.CASCADE,
        verbose_name="Потомок"
    )
    depth = models.PositiveIntegerField("Уровень вложенности")

    class Meta:
        unique_together = ('ancestor', 'descendant')

        ordering = ['depth']
        verbose_name = "Запись в таблице замыканий"
        verbose_name_plural = "Таблица замыканий"

    def __str__(self):
        return f"Предок: {self.ancestor}, Потомок: {self.descendant}, Уровень: {self.depth}"