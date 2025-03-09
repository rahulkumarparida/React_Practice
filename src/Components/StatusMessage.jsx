//? Q10. Create a StatusMessage component that takes a status prop ("success" or "error") and displays a different message accordingly.

export default function StatusMessage(props) {
  let Sstl = {
    backgroundColor: "green",
  };
  let Estl = {
    backgroundColor: "red",
  };

  return (
    <>
      <p style={props.Status == "SUCCESS" ? Sstl : Estl}>{props.Status}</p>
    </>
  );
}
