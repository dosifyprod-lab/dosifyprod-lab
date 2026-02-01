// --- Плавная прокрутка ---
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// --- Модальное окно ---
const modal = document.getElementById('modalForm');
const closeBtn = document.querySelector('.close');
const callbackBtn = document.getElementById('callbackBtn'); // кнопка "Обратный звонок"
const requestBtn = document.getElementById('requestBtn'); // кнопка "Оставить заявку"

// Форма и сообщение
const form = document.getElementById("feedbackForm");
const formMessage = document.getElementById("formMessage");

// Открытие модалки
callbackBtn.onclick = () => {
  modal.style.display = 'flex';
  document.querySelector('.modal-content h2').innerText = 'Обратный звонок';
};

requestBtn.onclick = () => {
  modal.style.display = 'flex';
  document.querySelector('.modal-content h2').innerText = 'Оставьте заявку';
};

// Закрытие модалки
closeBtn.onclick = () => (modal.style.display = 'none');
window.onclick = e => {
  if (e.target === modal) modal.style.display = 'none';
};

// --- Отправка формы через Web3Forms ---
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // не перезагружаем страницу

  const formData = new FormData();
  formData.append("access_key", "c601b50b-3647-4a3e-bc45-38c284f4f5f1"); // твой ключ
  formData.append("name", form.name.value);
  formData.append("phone", form.phone.value);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();
    if (result.success) {
      formMessage.style.display = "block"; // показываем сообщение
      form.reset(); // очищаем форму
    } else {
      alert("Ошибка при отправке. Попробуйте снова.");
    }
  } catch (error) {
    alert("Ошибка сети. Попробуйте позже.");
    console.error(error);
  }
});

/* Анимации */
