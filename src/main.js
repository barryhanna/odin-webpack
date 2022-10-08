const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content');

tabs.forEach((tab) =>
  tab.addEventListener('click', (e) => {
    tabContents.forEach((tab) => tab.classList.remove('active'));
    document.querySelector(e.target.dataset.tabTarget).classList.add('active');
  })
);
