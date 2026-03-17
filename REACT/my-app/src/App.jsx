import Counter from "./Counter";
import WelcomeDialog from "./WelcomeDialog";
import WaringDialog from "./WaringDialog";
import User from "./User";


function Profile(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}>
      <h2>Hello, my name is {props.name}!</h2>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* Gọi Component và truyền Props */}
      <User username="Alice_Dev" />
      <User username="Bob_Designer" />
    </div>
  );
}
