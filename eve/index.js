document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");
    const totalAmount = document.getElementById("total-amount");

    let expenses = [];

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("expense-name").value;
        const amount = document.getElementById("expense-amount").value;
        const category = document.getElementById("expense-category").value;
        const date = document.getElementById("expense-date").value;
        const time = document.getElementById("expense-time").value; // Capture time

        const expense = {
            id: Date.now(),
            name,
            amount,
            category,
            date,
            time // Add time to expense object
        };

        expenses.push(expense);
        displayExpenses(expenses);
        updateTotalAmount();

        expenseForm.reset();
    });

    expenseList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const id = parseInt(e.target.dataset.id);
            expenses = expenses.filter(expense => expense.id !== id);
            displayExpenses(expenses);
            updateTotalAmount();
        }

        if (e.target.classList.contains("edit-btn")) {
            const id = parseInt(e.target.dataset.id);
            const expense = expenses.find(expense => expense.id === id);

            document.getElementById("expense-name").value = expense.name;
            document.getElementById("expense-amount").value = expense.amount;
            document.getElementById("expense-category").value = expense.category;
            document.getElementById("expense-date").value = expense.date;
            document.getElementById("expense-time").value = expense.time; // Set time in form

            expenses = expenses.filter(expense => expense.id !== id);
            displayExpenses(expenses);
            updateTotalAmount();
        }
    });

    function displayExpenses(expenses) {
        expenseList.innerHTML = "";
        expenses.forEach(expense => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${expense.name}</td>
                <td>${expense.amount}</td>
                <td>${expense.date}</td>
                <td>${expense.time}</td> <!-- Display time -->
                <td>${expense.category}</td>
                <td>
                    <button class="edit-btn btn btn-sm btn-warning" data-id="${expense.id}">Edit</button>
                    <button class="delete-btn btn btn-sm btn-danger" data-id="${expense.id}">Delete</button>
                </td>
            `;

            expenseList.appendChild(row);
        });
    }

    function updateTotalAmount() {
        const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
        totalAmount.textContent = total.toFixed(2);
    }
});
