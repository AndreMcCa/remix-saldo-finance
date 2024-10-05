export function loader() {
  return DUMMY_EXPENSES;
}

var DUMMY_EXPENSES = [
  { id: "e3", title: "Utilities", amount: 150.67, date: new Date(2023, 6, 5) },
  { id: "e1", title: "Groceries", amount: 94.12, date: new Date(2023, 7, 14) },
  { id: "e2", title: "Rent", amount: 450.0, date: new Date(2023, 8, 1) },
  { id: "e4", title: "Internet", amount: 60.0, date: new Date(2023, 8, 10) },
  { id: "e5", title: "Transport", amount: 30.0, date: new Date(2023, 9, 20) },
];
