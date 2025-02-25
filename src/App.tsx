function HoverFocusAndOtherStates() {
  return (
    <div>
      <button className="ms-4 mt-4 bg-lime-500 hover:bg-lime-200">
        Save changes
      </button>
      <button className="bg-violet-500 text-white hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
        Save changes
      </button>
      <ul className="ms-4 mt-4">
        <li className="first:bg-red-200 last:bg-yellow-200 odd:text-red-800 even:text-green-700 nth-2:underline nth-last-2:font-bold">
          Item 1
        </li>
        <li className="first:bg-red-200 last:bg-yellow-200 odd:text-red-800 even:text-green-700 nth-2:underline nth-last-2:font-bold">
          Item 2
        </li>
        <li className="first:bg-red-200 last:bg-yellow-200 odd:text-red-800 even:text-green-700 nth-2:underline nth-last-2:font-bold">
          Item 3
        </li>
        <li className="first:bg-red-200 last:bg-yellow-200 odd:text-red-800 even:text-green-700 nth-2:underline nth-last-2:font-bold">
          Item 4
        </li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <>
      <h1 className="ms-4 mt-4 text-3xl font-bold underline">Hello world!</h1>
      <HoverFocusAndOtherStates />
    </>
  )
}

export default App
