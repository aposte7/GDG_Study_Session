import { useCallback, useMemo, useReducer, useState } from "react";
import useCharacterCount from "./hooks/useCharacterCount";

const initialState = {
  message: "",
  charNum: 0,
  warning: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_MESSAGE":
      const charNum11 = action.payload.length;
      return {
        ...state,
        message: action.payload,
        charNum: charNum11,
        warning: charNum11 > 180, // Show warning at 90% of 200
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { message, charNum, warning } = state;
  const [buttonText, setButtonText] = useState("Copy");

  const handleInputChange = useCallback(
    (e) => {
      if (e.target.value.length <= 200) {
        dispatch({ type: "SET_MESSAGE", payload: e.target.value });
      }
    },
    [dispatch],
  );

  const progressValue = useMemo(() => (charNum / 200) * 100, [charNum]);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(message);
    setButtonText("Copied!");
    const timeoutId = setTimeout(() => setButtonText("Copy"), 2000);
    return () => clearTimeout(timeoutId);
  }, [message]);

  useCharacterCount(message);

  return (
    <div className="h-dvh bg-blue-500">
      <form
        className="relative grid h-[30rem] place-content-center p-10"
        action=""
      >
        <div className="relative">
          <div
            className={`absolute top-2 left-2 z-5 text-lg ${
              warning ? "text-red-500" : "text-amber-700"
            }`}
          >
            {charNum} / 200 chars
          </div>
          <textarea
            onChange={handleInputChange}
            value={message}
            className={`relative rounded bg-amber-50 px-3 pt-16 pb-20 ${
              warning ? "border-red-500" : "border-transparent"
            }`} // Add border color for warning
            rows="7"
            cols="75"
          ></textarea>

          <div className="absolute bottom-2 left-0 flex w-full items-center justify-between px-3 py-1">
            <div className="relative h-3 w-[70%] overflow-hidden rounded bg-gray-300">
              <div
                style={{
                  width: `${progressValue}%`,
                  backgroundColor:
                    progressValue > 90
                      ? "red"
                      : progressValue > 50
                        ? "orange"
                        : "green", // Dynamically set background color
                }}
                className="h-full"
              ></div>
            </div>
            <button
              onClick={copyToClipboard}
              className="cursor-pointer rounded-md bg-blue-400 px-3 py-1 text-amber-50"
              type="button"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
