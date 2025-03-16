import { useState } from "react";
// import Text from "../components/Text";

function App() {
  const [color, setColor] = useState("black");
  const [text,setText] = useState("Click any Color")

  const handleClick = (newColor,newText)=>{
    setColor(newColor)
    setText(newText)
  }

  return (
    <div className=" h-screen w-full flex justify-center transition-all duration-300" style={{ backgroundColor: color }}>
    <p className="text-white flex justify-center items-center transition-all duration-200">{text}</p>        
      <div className="fixed flex justify-center top-28 right-10 text-white">
        <div className="flex flex-col justify-center bg-white py-2 px-3 rounded-xl shadow-2xl gap-3 ">
          <button onClick={()=> handleClick("Coral","Hi I AM CORAL")}
            className="outline-none py-1 px-4 rounded-xl"
            style={{ backgroundColor: "Coral" }}
          >
            Coral
          </button>
          <button onClick={()=>handleClick('Turquoise','HI I AM TURQUOISE')}
            className="outline-none py-1 px-4 rounded-xl"
            style={{ backgroundColor: "Turquoise" }}
          >
            Turquoise
          </button>
          <button onClick={()=>handleClick('Lavender',"HI I AM LAVENDER")}
            className="outline-none py-1 px-4 rounded-xl"
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
          <button onClick={()=>handleClick("#FFDAB9","HI I AM PEACH")}
            className="outline-none py-1 px-4 rounded-xl"
            style={{ backgroundColor: "#FFDAB9" }}
          >
            Peach
          </button>
          <button onClick={()=>handleClick("Salmon","HI I AM SALMON")}
            className="outline-none py-1 px-4 rounded-xl"
            style={{ backgroundColor: "Salmon" }}
          >
            Salmon
          </button>
          <button onClick={()=>handleClick("Indigo","HI I AM INDIGO")}
            className="outline-none py-1 px-4 rounded-xl"
            style={{ backgroundColor: "Indigo" }}
          >
            Indigo
          </button>
          <button onClick={()=>handleClick("Crimson","HI I AM CRIMSON")}
            className="outline-none py-1 px-4 rounded-xl"
            style={{ backgroundColor: "Crimson" }}
          >
            Crimson
          </button>
          <button onClick={()=>handleClick('#FF69B4',"HI I AM HOTPINK")}
            className="outline-none py-1 px-4 rounded-xl"
            style={{ backgroundColor: "#FF69B4" }}
          >
            HotPink
          </button>
          <button onClick={()=>handleClick("Chocolate","HI I AM CHOCOLATE")}
            className="outline-none py-1 px-4 rounded-xl"
            style={{ backgroundColor: "Chocolate" }}
          >
            Chocolate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
