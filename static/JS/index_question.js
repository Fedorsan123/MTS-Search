function selectedQuestion(question) {
    localStorage.setItem('selectedQuestion', question);
    window.location.href = 'index_three.html';
  }
    // Получаем выбранный отдел из LocalStorage
    const selectedDepartment = localStorage.getItem('selectedDepartment');

    // Если данные найдены, отображаем их на странице
    //1
    if (selectedDepartment == "Отдел разработки") {
      document.querySelector('#selected-department1').textContent = `Функционал приложения`;
      document.querySelector('#selected-department2').textContent = `Базы данных`;
      document.querySelector('#selected-department3').textContent = `Оптимизация кода`;
      document.querySelector('#selected-department4').textContent = `Проблемы с API`;
      document.querySelector('#selected-department5').textContent = `Frontend разработка`;
      document.querySelector('#selected-department6').textContent = `Тестирование ПО`;
      document.querySelector('#selected-department7').textContent = `Исправление багов`;
      document.querySelector('#selected-department8').textContent = `Интеграция сервисов`;
      document.querySelector('#selected-department9').textContent = `Java разработка`;
      document.querySelector('#selected-department10').textContent = `DevOps процессы`;
      document.querySelector('#selected-department11').textContent = `Тех документация`;
      document.querySelector('#selected-department12').textContent = `Кибербезопасность`;
      document.querySelector('#selected-department13').textContent = `BackEnd разработка`;
      document.querySelector('#selected-department14').remove();
      document.querySelector('#selected-department15').remove();
      document.querySelector('#selected-department16').remove();
      document.querySelector('#selected-department17').remove();
      document.querySelector('#selected-department18').remove();
    } //2
    else if (selectedDepartment == "Отдел дизайна"){
        document.querySelector('#selected-department1').textContent = `Интерфейс`;
        document.querySelector('#selected-department2').textContent = `UX/UI исследования`;
        document.querySelector('#selected-department3').textContent = `Графический дизайн`;
        document.querySelector('#selected-department4').textContent = `Анимация`;
        document.querySelector('#selected-department5').textContent = `3D моделирование`;
        document.querySelector('#selected-department6').textContent = `Создание иконок`;
        document.querySelector('#selected-department7').textContent = `Цветовое оформление`;
        document.querySelector('#selected-department8').textContent = `Дизайн соц сети`;
        document.querySelector('#selected-department9').textContent = `Адаптивный дизайн`;
        document.querySelector('#selected-department10').textContent = `Создание презентации`;
        document.querySelector('#selected-department11').textContent = `Типографика`;
        document.querySelector('#selected-department12').remove();
        document.querySelector('#selected-department13').remove();
        document.querySelector('#selected-department14').remove();
        document.querySelector('#selected-department15').remove();
        document.querySelector('#selected-department16').remove();
        document.querySelector('#selected-department17').remove();
        document.querySelector('#selected-department18').remove();
    }//3
    else if (selectedDepartment == "Отдел маркетинга"){
        document.querySelector('#selected-department1').textContent = `Контент стратегия`;
        document.querySelector('#selected-department2').textContent = `SEO`;
        document.querySelector('#selected-department3').textContent = `Рекламная компания`;
        document.querySelector('#selected-department4').textContent = `Анализ пользователя`;
        document.querySelector('#selected-department5').textContent = `Продвижение в соц сетях`;
        document.querySelector('#selected-department6').textContent = `Email рассылки`;
        document.querySelector('#selected-department7').textContent = `Контекстная реклама`;
        document.querySelector('#selected-department8').textContent = `Анализ рынка`;
        document.querySelector('#selected-department9').textContent = `Брендинг`;
        document.querySelector('#selected-department10').textContent = `Работа с лидерами мнений`;
        document.querySelector('#selected-department11').textContent = `Медиапланирование`;
        document.querySelector('#selected-department12').textContent = `Видеомаркетинг`;
        document.querySelector('#selected-department13').textContent = `Выход на новый рынок`;
        document.querySelector('#selected-department14').textContent = `PR-акции`;
        document.querySelector('#selected-department15').remove();
        document.querySelector('#selected-department16').remove();
        document.querySelector('#selected-department17').remove();
        document.querySelector('#selected-department18').remove();
    }//4
    else if (selectedDepartment == "Отдел связи"){
        document.querySelector('#selected-department1').textContent = `Сетевая безопасность`;
        document.querySelector('#selected-department2').textContent = `Настройка VPN`;
        document.querySelector('#selected-department3').textContent = `Обслуживание серверов`;
        document.querySelector('#selected-department4').textContent = `Офисная телефония`;
        document.querySelector('#selected-department5').textContent = `Видеоконцеренции`;
        document.querySelector('#selected-department6').textContent = `Обновление систем связи`;
        document.querySelector('#selected-department7').textContent = `Интеграция IoT-решений`;
        document.querySelector('#selected-department8').textContent = `Корпаративный мессенджер`;
        document.querySelector('#selected-department9').textContent = `Настройка Wi-Fi`;
        document.querySelector('#selected-department10').textContent = `Работа с CRM`;
        document.querySelector('#selected-department11').remove();
        document.querySelector('#selected-department12').remove();
        document.querySelector('#selected-department13').remove();
        document.querySelector('#selected-department14').remove();
        document.querySelector('#selected-department15').remove();
        document.querySelector('#selected-department16').remove();
        document.querySelector('#selected-department17').remove();
        document.querySelector('#selected-department18').remove();
    }//5
    else if (selectedDepartment == "Отдел финансов"){
        document.querySelector('#selected-department1').textContent = `Рассчет бюджета проекта`;
        document.querySelector('#selected-department2').textContent = `Уточнение отчетов`;
        document.querySelector('#selected-department3').textContent = `Налоги`;
        document.querySelector('#selected-department4').textContent = `Фин прогноз`;
        document.querySelector('#selected-department5').textContent = `Доходы/Расходы`;
        document.querySelector('#selected-department6').textContent = `Документы для кредиторов`;
        document.querySelector('#selected-department7').textContent = `Платежи партнеров`;
        document.querySelector('#selected-department8').textContent = `Внутренний аудит`;
        document.querySelector('#selected-department9').textContent = `Финансовая отчетность`;
        document.querySelector('#selected-department10').textContent = `Оплата счетов`;
        document.querySelector('#selected-department11').textContent = `Инвестиции`;
        document.querySelector('#selected-department12').textContent = `Распределение фондов`;
        document.querySelector('#selected-department13').textContent = `Рентабельность`;
        document.querySelector('#selected-department14').remove();
        document.querySelector('#selected-department15').remove();
        document.querySelector('#selected-department16').remove();
        document.querySelector('#selected-department17').remove();
        document.querySelector('#selected-department18').remove();
    }//6
    else if (selectedDepartment == "Отдел клиентского обслуживания"){
        document.querySelector('#selected-department1').textContent = `Жалобы клиента`;
        document.querySelector('#selected-department2').textContent = `Обучение работе с клиентом`;
        document.querySelector('#selected-department3').textContent = `Политика возвратов`;
        document.querySelector('#selected-department4').textContent = `Анализ обратной связи`;
        document.querySelector('#selected-department5').textContent = `VIP-клиент`;
        document.querySelector('#selected-department6').textContent = `Скрипты по клиенту`;
        document.querySelector('#selected-department7').textContent = `Удовлетворенность клиента`;
        document.querySelector('#selected-department8').textContent = `Внутренний аудит`;
        document.querySelector('#selected-department9').textContent = `Заявки в соц сетях`;
        document.querySelector('#selected-department10').textContent = `Настандартный вопрос клиента`;
        document.querySelector('#selected-department11').textContent = `Развитие лояльности клиентов`;
        document.querySelector('#selected-department12').remove();
        document.querySelector('#selected-department13').remove();
        document.querySelector('#selected-department14').remove();
        document.querySelector('#selected-department15').remove();
        document.querySelector('#selected-department16').remove();
        document.querySelector('#selected-department17').remove();
        document.querySelector('#selected-department18').remove();
    }//7
    else if (selectedDepartment == "Отдел продаж"){
        document.querySelector('#selected-department1').textContent = `Стратегия продаж`;
        document.querySelector('#selected-department2').textContent = `Коммерческое предложение`;
        document.querySelector('#selected-department3').textContent = `Холодные звонки`;
        document.querySelector('#selected-department4').textContent = `Ключевые клиенты`;
        document.querySelector('#selected-department5').textContent = `Ценообразование`;
        document.querySelector('#selected-department6').textContent = `Анализ конверсии`;
        document.querySelector('#selected-department7').textContent = `Прогноз продаж`;
        document.querySelector('#selected-department8').textContent = `Работа с тендерами`;
        document.querySelector('#selected-department9').textContent = `Увеличение продаж`;
        document.querySelector('#selected-department10').textContent = `Анализ конкурентов`;
        document.querySelector('#selected-department11').textContent = `Международный клиент`;
        document.querySelector('#selected-department12').textContent = `Прошлые сделки`;
        document.querySelector('#selected-department13').textContent = `Повышение среднего чека`;
        document.querySelector('#selected-department14').remove();
        document.querySelector('#selected-department15').remove();
        document.querySelector('#selected-department16').remove();
        document.querySelector('#selected-department17').remove();
        document.querySelector('#selected-department18').remove();
    }//8
    else if (selectedDepartment == "Отдел кадров"){
        document.querySelector('#selected-department1').textContent = `Подбор персонала`;
        document.querySelector('#selected-department2').textContent = `Обучение сотрудников`;
        document.querySelector('#selected-department3').textContent = `Аттестация`;
        document.querySelector('#selected-department4').textContent = `Трудовой договор`;
        document.querySelector('#selected-department5').textContent = `Льготы`;
        document.querySelector('#selected-department6').textContent = `Компенсации`;
        document.querySelector('#selected-department7').textContent = `Карьерное планирование`;
        document.querySelector('#selected-department8').textContent = `Документы на отпуск`;
        document.querySelector('#selected-department9').textContent = `Корпоративные мероприятия`;
        document.querySelector('#selected-department10').textContent = `Собеседование`;
        document.querySelector('#selected-department11').textContent = `Международный клиент`;
        document.querySelector('#selected-department12').textContent = `Проблемы в коллективе`;
        document.querySelector('#selected-department13').textContent = `База сотрудников`;
        document.querySelector('#selected-department14').textContent = `Программа наставничества`;
        document.querySelector('#selected-department15').textContent = `Мотивационная система`;
        document.querySelector('#selected-department16').textContent = `Переквалицикация`;
        document.querySelector('#selected-department17').textContent = `Повышение квалификации`;
        document.querySelector('#selected-department17').textContent = `Отпуск/Больничный`;
        document.querySelector('#selected-department18').remove();
    }//9
    else if (selectedDepartment == "Юридический отдел"){
        document.querySelector('#selected-department1').textContent = `Проверка договоров`;
        document.querySelector('#selected-department2').textContent = `Юридические риски`;
        document.querySelector('#selected-department3').textContent = `Авторские права`;
        document.querySelector('#selected-department4').textContent = `Трудовой договор`;
        document.querySelector('#selected-department5').textContent = `Юридическая консультация`;
        document.querySelector('#selected-department6').textContent = `Компенсации`;
        document.querySelector('#selected-department7').textContent = `Судебные иски`;
        document.querySelector('#selected-department8').textContent = `Юридические проверки`;
        document.querySelector('#selected-department9').textContent = `Претензионные письма`;
        document.querySelector('#selected-department10').textContent = `Нормативные акты`;
        document.querySelector('#selected-department11').textContent = `Требований GDPR`;
        document.querySelector('#selected-department12').textContent = `Налоги`;
        document.querySelector('#selected-department13').textContent = `Интеллектуальная собственность`;
        document.querySelector('#selected-department14').remove();
        document.querySelector('#selected-department15').remove();
        document.querySelector('#selected-department16').remove();
        document.querySelector('#selected-department17').remove();
        document.querySelector('#selected-department18').remove();
    }//10
    else if (selectedDepartment == "Отдел по управлению качеством"){
        document.querySelector('#selected-department1').textContent = `Соответствие стандартам`;
        document.querySelector('#selected-department2').textContent = `Сертификация продукции`;
        document.querySelector('#selected-department3').textContent = `Улучшение качества`;
        document.querySelector('#selected-department4').textContent = `Внутренние проверки`;
        document.querySelector('#selected-department5').textContent = `Жалобы на качество`;
        document.querySelector('#selected-department6').textContent = `Контроль качества`;
        document.querySelector('#selected-department7').textContent = `Брак`;
        document.querySelector('#selected-department8').remove();
        document.querySelector('#selected-department9').remove();
        document.querySelector('#selected-department10').remove();
        document.querySelector('#selected-department11').remove();
        document.querySelector('#selected-department12').remove();
        document.querySelector('#selected-department13').remove();
        document.querySelector('#selected-department14').remove();
        document.querySelector('#selected-department15').remove();
        document.querySelector('#selected-department16').remove();
        document.querySelector('#selected-department17').remove();
        document.querySelector('#selected-department18').remove();
    }else{
        window.location.href = 'index.html';
    }

    console.log(selectedDepartment)