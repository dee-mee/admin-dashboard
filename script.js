// Chart.js
const salesChartCanvas = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesChartCanvas, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [12000, 19000, 3000, 5000, 2000, 30000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Dynamic data for orders and activity
const orders = [
    { id: '#1237', customer: 'Alice', product: 'Product D', amount: '$250.00', status: 'Completed' },
    { id: '#1238', customer: 'Bob', product: 'Product E', amount: '$150.00', status: 'Pending' },
    { id: '#1239', customer: 'Charlie', product: 'Product F', amount: '$200.00', status: 'Completed' },
];

const activities = [
    'New order placed: #1239',
    'User updated profile: Bob',
    'New user registered: Alice',
];

const ordersTableBody = document.getElementById('orders-table-body');
const activityList = document.getElementById('activity-list');

orders.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.product}</td>
        <td>${order.amount}</td>
        <td><span class="badge bg-${order.status === 'Completed' ? 'success' : 'warning'}">${order.status}</span></td>
    `;
    ordersTableBody.appendChild(row);
});

activities.forEach(activity => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = activity;
    activityList.appendChild(listItem);
});
