from rest_framework import serializers
from .models import Department, Employee, EmployeeHierarchyClosure

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'department_name', 'location', 'manager']

class EmployeeSerializer(serializers.ModelSerializer):
    manager_name = serializers.SerializerMethodField()
    department_name = serializers.CharField(source='department.department_name', read_only=True)
    subordinates = serializers.SerializerMethodField()

    class Meta:
        model = Employee
        fields = [
            'id', 'first_name', 'last_name', 'job_title', 'email', 'phone_number',
            'hire_date', 'department_name', 'manager', 'manager_name', 'subordinates'
        ]

    def get_manager_name(self, obj):
        if obj.manager:
            return f"{obj.manager.first_name} {obj.manager.last_name}"
        return None

    def get_subordinates(self, obj):
        if hasattr(obj, 'subordinates_list'):
            return EmployeeSerializer(obj.subordinates_list, many=True).data
        return []

class EmployeeHierarchySerializer(serializers.ModelSerializer):
    ancestor_name = serializers.CharField(source='ancestor.first_name', read_only=True)
    descendant_name = serializers.CharField(source='descendant.first_name', read_only=True)

    class Meta:
        model = EmployeeHierarchyClosure
        fields = ['ancestor', 'ancestor_name', 'descendant', 'descendant_name', 'depth']
