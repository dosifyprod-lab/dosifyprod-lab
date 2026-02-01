// --- Плавная прокрутка ---
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // --- Модальное окно ---
  const modal = document.getElementById('modalForm');
  const closeBtn = document.querySelector('.close');
  const callbackBtn = document.getElementById('callbackBtn'); // кнопка "Обратный звонок"
  const requestBtn = document.getElementById('requestBtn'); // кнопка "Оставить заявку"

  // Форма и сообщение
  const form = document.getElementById("feedbackForm");
  const formMessage = document.getElementById("formMessage");

  // Проверяем наличие всех нужных элементов
  if (modal && closeBtn) {

    // Открытие модалки
    if (callbackBtn) {
      callbackBtn.onclick = () => {
        modal.style.display = 'flex';
        const header = modal.querySelector('.modal-content h2');
        if (header) header.innerText = 'Обратный звонок';
      };
    }

    if (requestBtn) {
      requestBtn.onclick = () => {
        modal.style.display = 'flex';
        const header = modal.querySelector('.modal-content h2');
        if (header) header.innerText = 'Оставьте заявку';
      };
    }

    // Закрытие модалки
    closeBtn.onclick = () => {
      modal.style.display = 'none';
    };

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});



/*=====абонементы=====*/



/*==========*/