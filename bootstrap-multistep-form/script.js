document.addEventListener('DOMContentLoaded', function () {
    const form        = document.getElementById('wizardForm');
    const steps       = form.querySelectorAll('.step');
    const prevBtns    = form.querySelectorAll('.prev-btn');
    const nextBtns    = form.querySelectorAll('.next-btn');
    const progressBar = document.querySelector('.progress-bar');

    let currentStep = 0;

    function showStep(index) {
      steps.forEach((step, i) => {
        if (i === index) {
          step.classList.remove('d-none');
        } else {
          step.classList.add('d-none');
        }
      });

      updateProgress();
    }

    function updateProgress() {
      const progress = ((currentStep + 1) / steps.length) * 100;
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', progress);
    }

    function handlePrev() {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    }

    function handleNext() {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    }

    prevBtns.forEach(btn => btn.addEventListener('click', handlePrev));
    nextBtns.forEach(btn => btn.addEventListener('click', handleNext));

    showStep( currentStep );
  });