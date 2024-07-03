// Users

const adminUserTable = document.querySelector('.admin-user-table');
const adminAddUserBtn = document.querySelector('.admin-add-user-btn');
let users = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Doe', email: 'janedoe@example.com', role: 'User' },
];

// Render users table
function renderUsersTable() {
  adminUserTable.innerHTML = '';
  users.forEach((user) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>
        <button class="admin-edit-user-btn" data-user-id="${user.id}">Edit</button>
        <button class="admin-delete-user-btn" data-user-id="${user.id}">Delete</button>
      </td>
    `;
    adminUserTable.appendChild(row);
  });
  
  // Add event listeners for edit and delete buttons
  const adminEditUserBtns = document.querySelectorAll('.admin-edit-user-btn');
  adminEditUserBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const userId = btn.getAttribute('data-user-id');
      const user = users.find((user) => user.id === parseInt(userId));
      user.name = prompt('Enter new user name', user.name);
      user.email = prompt('Enter new user email', user.email);
      user.role = prompt('Enter new user role', user.role);
      renderUsersTable();
    });
  });
  
  const adminDeleteUserBtns = document.querySelectorAll('.admin-delete-user-btn');
  adminDeleteUserBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const userId = btn.getAttribute('data-user-id');
      users = users.filter((user) => user.id!== parseInt(userId));
      renderUsersTable();
    });
  });
}

renderUsersTable();

// Add new user
adminAddUserBtn.addEventListener('click', () => {
  const newUser = {
    id: users.length + 1,
    name: prompt('Enter new user name'),
    email: prompt('Enter new user email'),
    role: prompt('Enter new user role'),
  };
  users.push(newUser);
  renderUsersTable();
});