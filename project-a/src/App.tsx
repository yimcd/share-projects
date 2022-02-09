import CommonComponent from "lib/CommonComponent";
import { log } from "lib/utils/logUtils";

export default function App() {
  return (
    <div>
      <div>Hello, It's project-a</div>
      <CommonComponent />
      {log("loaded from Lib")}
    </div>
  );
}
