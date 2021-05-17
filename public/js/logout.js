const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to log out.');
    }
  };
  console.log(document.querySelector('#logoutButton'))
  document.querySelector('#logoutButton').addEventListener('click', logout);
