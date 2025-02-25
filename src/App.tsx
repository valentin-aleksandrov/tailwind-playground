/**
 * More info
 * https://tailwindcss.com/docs/hover-focus-and-other-states
 */
function HoverFocusAndOtherStates() {
  return (
    <div className="m-2 has-disabled:border-2 has-disabled:border-indigo-600">
      <button className="ms-4 mt-4 bg-lime-500 hover:bg-lime-200">
        Save changes
      </button>
      <button className="mx-4 bg-violet-500 text-white hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
        Save changes
      </button>
      <button disabled className="ms-4 mt-4 bg-yellow-500 hover:bg-lime-200">
        Disabled button
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
