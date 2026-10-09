
const habitInputs = document.querySelectorAll('.habit input');

const progressCount = document.getElementById('progress-count');

function updateProgress() {
  const checked = document.querySelectorAll(
    '.habit input:checked'
  ).length;

  progressCount.textContent = checked;
}

habitInputs.forEach((input) => {
  input.addEventListener('change', updateProgress);
});

updateProgress();
