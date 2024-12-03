function createCounter(n) {
    let count = n; // Инициализируем счетчик значением n

    return function() {
        const current = count; // Сохраняем текущее значение
        count += 1; // Увеличиваем счетчик на 1 для следующего вызова
        return current; // Возвращаем текущее значение
    };
}

// Пример использования:

// Пример 1:
const counter1 = createCounter(10);
console.log(counter1()); // Вывод: 10
console.log(counter1()); // Вывод: 11
console.log(counter1()); // Вывод: 12

// Пример 2:
const counter2 = createCounter(-2);
console.log(counter2()); // Вывод: -2
console.log(counter2()); // Вывод: -1
console.log(counter2()); // Вывод: 0
console.log(counter2()); // Вывод: 1
console.log(counter2()); // Вывод: 2
