import AddTodoForm from "./components/AddTodoForm";
import PageTitle from "./components/PageTitle";
import TodosContainer from "./components/TodosContainer";

const App = () => {
  return (
    <main>
      <PageTitle text={"My Todo App"} />
      <AddTodoForm  />
      <TodosContainer  />
    </main>
  );
};

export default App;
