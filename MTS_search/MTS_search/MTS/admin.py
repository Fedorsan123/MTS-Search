from django.contrib import admin
from .models import Employee, Task, EmployeeHierarchyClosure, Department

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'department', 'job_title', 'email', 'phone_number', 'hire_date', 'manager', 'date_of_birth', 'address', 'salary', 'gender')
    search_fields = ('first_name', 'last_name', 'email', 'phone_number')
    list_filter = ('department', 'job_title', 'hire_date', 'gender')

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('task_name', 'assigned_to', 'assigned_by', 'start_date', 'due_date', 'status', 'priority')
    search_fields = ('task_name', 'description')
    list_filter = ('status', 'priority', 'start_date', 'due_date')

@admin.register(EmployeeHierarchyClosure)
class EmployeeHierarchyClosureAdmin(admin.ModelAdmin):
    list_display = ('ancestor', 'descendant', 'depth')
    search_fields = ('ancestor__first_name', 'ancestor__last_name', 'descendant__first_name', 'descendant__last_name')
    list_filter = ('depth',)

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('department_name', 'location', 'manager')
    search_fields = ('department_name',)
    list_filter = ('location',)
