import PageWrapper from "./common/pageWrapper/PageWrapper";
import Header from "./components/header/Header";
import Todos from "../src/components/todos/Todos"


function App() {
  return (
    <PageWrapper>
      <Header />
      <Todos />
    </PageWrapper>
  );
}

export default App;
