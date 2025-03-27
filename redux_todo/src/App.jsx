import { useSelector } from "react-redux";

function App() {
  const todo = useSelector((state) => state.todo.task);
  // const dispatch = useDispatch();
  console.log(todo);

  return (
    <div className="h-dvh w-full space-y-8 bg-indigo-950 px-10 pt-20 text-blue-500">
      <div className="mx-auto flex w-3/4 justify-center py-4">
        <form className="flex h-fit gap-4">
          <input
            className="h-fit w-[25rem] border-b border-b-gray-500 px-1 text-lg focus:border-b-blue-400 focus:outline-none"
            type="text"
            placeholder="todo..."
          />
          <button className="cursor-pointer rounded-sm bg-blue-400 px-2 text-lg text-cyan-800">
            Add
          </button>
        </form>
      </div>
      <div className="mx-auto w-fit py-4">
        <div className="flex w-[33rem] gap-6 rounded bg-blue-900 px-4 py-1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

          <div className="flex items-center">
            <p className="inline-block px-4 text-lg text-orange-600">X</p>

            <input
              className="inline-block h-4 w-4"
              type="checkbox"
              name="completed"
              id="completed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
