const selectedDepartment = localStorage.getItem('selectedDepartment');
let APIString = '';
if (selectedDepartment == "Отдел разработки") {
  API = 'JSON/index_develop.json'
}else if(selectedDepartment == "Отдел дизайна"){
  API = 'JSON/index_design.json'
}else if(selectedDepartment == "Отдел маркетинга"){
  API = 'JSON/index_marketing.json'
}else if(selectedDepartment == "Отдел связи"){
  API = 'JSON/index_conect.json'
}else if(selectedDepartment == "Отдел клиентского обслуживания"){
  API = 'JSON/index_client.json'
}else if(selectedDepartment == "Отдел по управлению качеством"){
  API = 'JSON/index_qualityControl.json'
}else if(selectedDepartment == "Отдел продаж"){
  API = 'JSON/index_sales.json'
}else if(selectedDepartment == "Отдел кадров"){
  API = 'JSON/index_cadr.json'
}else if(selectedDepartment == "Отдел финансов"){
  API = 'JSON/index_finance.json'
}else if(selectedDepartment == "Юридический отдел"){
  API = 'JSON/index_finance.json'
}
async function fetchEmployees() {
    try {
      // Получение данных из API
      const response = await fetch(API); // Укажите ваш API
      const employees = await response.json();

      function flattenEmployees(employees) {
        let result = [];
    
        function flatten(employee) {
            // Create a shallow copy of the employee object without subordinates
            let { subordinates, ...employeeWithoutSubordinates } = employee;
            result.push(employeeWithoutSubordinates);
    
            // Recursively flatten subordinates
            if (subordinates && subordinates.length > 0) {
                subordinates.forEach(subordinate => flatten(subordinate));
            }
        }
    
        employees.forEach(employee => flatten(employee));
        return result;
    }
    flattenEmployees(employees)

    function combineNames(employees) {
      employees.forEach(employee => {
          // Combine first_name and last_name into a single name field
          employee.name = `${employee.first_name} ${employee.last_name}`;
          
          // Remove the original first_name and last_name fields
          delete employee.first_name;
          delete employee.last_name;
  
          // Recursively process subordinates
          if (employee.subordinates && employee.subordinates.length > 0) {
              combineNames(employee.subordinates);
          }
      });
  }
  combineNames(employees)
      // Заполнение выпадающего списка уникальными должностями
      populatePositionFilter(flattenEmployees(employees));
  
      // Отрисовка дерева
      drawTree(flattenEmployees(employees));
  
      // Обработчик фильтрации
      document.getElementById('position-filter').addEventListener('change', (e) => {
        const job_title = e.target.value;
        updateNodeColors(flattenEmployees(employees), job_title);
      });
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    }
  }





  
  function populatePositionFilter(employees) {
    const filter = document.getElementById('position-filter');
    const positions = [...new Set(employees.map(emp => emp.job_title))]; // Уникальные должности
    positions.forEach(job_title => {
      const option = document.createElement('option');
      option.value = job_title;
      option.textContent = job_title;
      filter.appendChild(option);
    });
  }
  
  function buildHierarchy(employees) {
    // Создаем карту сотрудников
    const map = new Map(employees.map(emp => [emp.id, { ...emp, children: [] }]));
  
    let root = null;
    map.forEach(emp => {
      if (emp.manager === null) {
        root = emp; // Корень дерева
      } else {
        const manager = map.get(emp.manager);
        if (manager) {
          manager.children.push(emp);
        }
      }
    });
  
    return root;
  }
  






  function drawTree(employees) {
  const svg = d3.select('#employee-tree');
  svg.selectAll('*').remove(); // Очистка графа

  const hierarchy = buildHierarchy(employees);

  if (!hierarchy) {
    svg.append('text').attr('x', 10).attr('y', 20).text('Нет данных для отображения.');
    return;
  }

  const treeLayout = d3.tree().size([600, 400]);
  const root = d3.hierarchy(hierarchy, d => d.children);

  treeLayout(root);

  const g = svg.append('g').attr('transform', 'translate(50, 50)');

  // Рисуем линии
  g.selectAll('.link')
    .data(root.links())
    .enter()
    .append('path')
    .attr('class', 'link')
    .attr('d', d3.linkHorizontal()
      .x(d => d.y)
      .y(d => d.x)
    );

  // Рисуем узлы
  const nodes = g.selectAll('.node')
    .data(root.descendants())
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', d => `translate(${d.y},${d.x})`)
    .attr('id', d => `node-${d.data.id}`); // Уникальный идентификатор для узла

  nodes.append('circle')
    .attr('r', 10)
    .attr('class', 'node-circle')
    .on('click', (event, d) => openModal(d.data)); // Открытие модального окна при клике

  nodes.append('text')
    .attr('dx', -50)
    .attr('dy', -20)
    .text(d => `${d.data.name}`);
}




  
  function updateNodeColors(employees, job_title) {
    employees.forEach(emp => {
      // Правильный селектор с использованием emp.id
      const node = d3.select(`#node-${emp.id} .node-circle`);
      if (node.empty()) {
        console.warn(`Узел с id "node-${emp.id}" не найден.`);
        return;
      }
  
      // Меняем цвет в зависимости от соответствия должности
      if (job_title === "" || emp.job_title === job_title) {
        node.style('fill', 'green');
      } else {
        node.style('fill', '#e40422');
      }
    });
  }
  
  // Инициализация
  fetchEmployees();
  




  function openModal(employee) {
  const modal = document.getElementById('modal');
  const modalPhoto = document.getElementById('modal-photo');
  const modalInfo = document.getElementById('modal-info');

  // Устанавливаем данные сотрудника
  modalPhoto.src = '../static/img/Alekandr_Filiak.jpg' || employee.photo;
  modalInfo.innerHTML = `
    <h2>${employee.name}</h2>
    <p>Должность: ${employee.job_title}</p>
    <p>Email: ${employee.email || 'Нет данных'}</p>
    <p>Телефон: ${employee.phone_number || 'Нет данных'}</p>
  `;

  // Показываем модальное окно
  modal.style.display = 'flex';

  // Закрытие модального окна
  const closeModal = (event) => {
    if (event.target === modal || event.target.id === 'modal-close') {
      modal.style.display = 'none';
      document.removeEventListener('click', closeModal);
    }
  };

  // Добавляем обработчик закрытия при клике
  document.addEventListener('click', closeModal);
}