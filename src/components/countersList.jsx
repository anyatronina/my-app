import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (id) => {
    setCounters((prevState) => {
      return prevState.map((count) => {
        count.id === id && (count.value += 1);
        return count;
      });
    });
  };

  const handleDecrement = (id) => {
    setCounters((prevState) => {
      return prevState.map((count) => {
        count.id === id && count.value > 0 && (count.value -= 1);
        return count;
      });
    });
  };

  const handleDelete = (id) => {
    const newCounters = counters.filter((count) => count.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleUpdate = () => {
    const updatedState = [
      { id: 0, value: 1, name: "Ненужная вещь" },
      { id: 1, value: 2, name: "Ложка" },
      { id: 2, value: 3, name: "Вилка" },
      { id: 3, value: 4, name: "Тарелка" },
      { id: 4, value: 5, name: "Набор минималиста" },
    ];
    setCounters(updatedState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>
        Обновление состояния
      </button>
    </>
  );
};

export default CountersList;
