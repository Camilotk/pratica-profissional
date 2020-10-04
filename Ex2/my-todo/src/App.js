import React, { useState } from 'react';
import './App.css';

/*
 * Cria um novo componente Todo
 *
 * Entrada:
 * Recebe um objeto e então descontroi as suas propriedades:
 *  todo: Objeto que contem o text e isCompleted.
 *  index: Indice recebido da função map
 *  comleteTodo: Função completeTodo passada.
 *  removeTodo: Função removeTodo passada.
 * 
 * Saída (this = var acima):
 * <div class="todo" style="text-decoration: line-thought">
 *      this.todo
 *   <div>
 *     <button onClick="this.completeTodo(this.index)">Completar</div>
 *     <button onClick="this.removeTodo(this.index)">x</button>
 *   </div>
 * </div>
 *      
 */ 
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo" style= { {textDecoration: todo.isCompleted ? "line-through" : ""}}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Completar</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function App() {
  // Array que contêm todos os itens que precisam ser feitos.
  const [todos, setTodos] = useState([
    {
      text: "Aprender sobre o React", isCompleted: false
    },
    {
      text: "Encontrar um amigo para o almoço", isCompleted: false
    },
    {
      text: "Passar no supermercado", isCompleted: false
    }
  ]);

  // Copia o Array acima e adiciona um item, então atualiza o estado.
  const addTodo = message => {
    const newTodos = [...todos, { text: message, isCompleted: false }];
    setTodos(newTodos);
  };

  // Copia o Array acima, então troca o valor da propriedade isCompleted do item no indice passado, então atualiza o estado.
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  // a função acima também poderia ser:
  // const removeTodo = index => setTodos(todos.map((todo, i) => if (index === i) todo.isCompleted = true;));

  // Copia o Array acime e usa a função splice para remover 1 elemento, então atualiza o estado.
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  // a função acima também poderia ser:
  // const removeTodo = index => setTodos(todos.filter((todo, i) => index = i));

  return (
    <div>
      <div className="todo-list">
        {
        
          todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
          )) 
        } 
      </div>
      <div>
        <button onClick= { _ => addTodo('Mais um item')}>Adicionar um item</button>
      </div>
    </div>
  );
}

export default App;
