export default function FruitList({onClick}) {
  let List = [
     {
      Name: "Mango",
      Price: "$20"
    },
    {
      Name: "Apple",
      Price: "$15"
    },
    {
      Name: "Grapes",
      Price: "$10"
    },
     {
      Name: "Guava",
      Price: "$8"
    },
   {
      Name: "Banana",
      Price: "$12"
    },
   {
      Name: "Dragon Fruit",
      Price: "$50"
    },
];

  return <>
    <h2>L I S T :</h2>
   <ul>
   {
     List.map((ele , idx)=>{
        // console.log(ele.Name)
     return <div key={idx}>
            <h1 onClick={onClick}>{ele.Name}</h1>
            {/* <button className="btn_fruits" >ADD</button> */}
        </div>
     })
    }
   </ul>
  </>;
}
