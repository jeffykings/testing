document.addEventListener('DOMContentLoaded', () => {
  const forgotPasswordForm = document.getElementById('forgotPasswordForm');

  forgotPasswordForm.addEventListener('submit', event => {
    event.preventDefault();
    const emailInput = forgotPasswordForm.querySelector('input[type="email"]').value;

    if (!emailInput) {
      alert('Please enter your email address.');
      return;
    }

    console.log(`Password reset link sent to: ${emailInput}`);
    alert('A password reset link has been sent to your email address.');
  });

  console.log('Forgot Password form initialized.');
});
