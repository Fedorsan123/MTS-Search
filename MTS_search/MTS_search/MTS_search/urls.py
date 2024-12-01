"""
URL configuration for MTS_search project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from MTS.views import EmployeeListView, DepartmentListView, EmployeeTreeView, EmployeeDetailView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/employees/', EmployeeListView.as_view(), name='employee-list'),
    path('api/departments/', DepartmentListView.as_view(), name='department-list'),
    path('api/employee-tree/', EmployeeTreeView.as_view(), name='employee-tree'),
    path('api/employees/<int:employee_id>/', EmployeeDetailView.as_view(), name='employee-detail'),

]
