
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Employee, Department, EmployeeHierarchyClosure
from .serializers import EmployeeSerializer, DepartmentSerializer, EmployeeHierarchySerializer

class EmployeeListView(APIView):
    def get(self, request):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)

class DepartmentListView(APIView):
    def get(self, request):
        departments = Department.objects.all()
        serializer = DepartmentSerializer(departments, many=True)
        return Response(serializer.data)

class EmployeeTreeView(APIView):
    def get(self, request):
        department_name = request.query_params.get('department_name')

        if not department_name:
            return Response({"error": "Department Name is required"}, status=400)

        departments = Department.objects.filter(department_name=department_name)
        if not departments.exists():
            return Response({"error": "Department not found"}, status=404)

        employees = Employee.objects.filter(department__in=departments)
        tree = self.build_tree(employees)
        return Response(tree)

    def build_tree(self, employees):
        employee_dict = {emp.id: emp for emp in employees}
        tree = []

        for emp in employees:
            if emp.manager_id and emp.manager_id in employee_dict:
                manager = employee_dict[emp.manager_id]
                if not hasattr(manager, 'subordinates_list'):
                    manager.subordinates_list = []
                manager.subordinates_list.append(emp)
            else:
                tree.append(emp)

        return EmployeeSerializer(tree, many=True).data
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Employee
from .serializers import EmployeeSerializer

class EmployeeDetailView(APIView):
    def get(self, request, employee_id):
        try:
            employee = Employee.objects.get(pk=employee_id)
            serializer = EmployeeSerializer(employee)
            return Response(serializer.data)
        except Employee.DoesNotExist:
            return Response({"error": "Employee not found"}, status=404)