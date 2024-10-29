import { useState } from "react"

function App() {
  const [color, setColor] = useState("darksalmon")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg bg-lime-100 rounded-xl">
          <button onClick={() => setColor("darkturquoise")} className="outline-none px-3 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "darkturquoise"}}>Turquoise</button>
          <button onClick={() => setColor("lightgray")} className="outline-none px-3 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "lightgray"}}>Gray</button>
          <button onClick={() => setColor("cyan")} className="outline-none px-3 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "cyan"}}>Cyan</button>
          <button onClick={() => setColor("lightpink")} className="outline-none px-3 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "lightpink"}}>Pink</button>
          <button onClick={() => setColor("lightyellow")} className="outline-none px-3 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "lightyellow"}}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
