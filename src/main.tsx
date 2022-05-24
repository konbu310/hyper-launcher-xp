import { FC } from "react";
import { createRoot } from "react-dom/client";

type App = {
  name: string;
  path: string;
  icon: string;
};

type HotkeyMap = {
  [key in "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"]: App[];
};

const hotkeyMap: HotkeyMap = {
  1: [{ name: "Explorer", path: "/", icon: "folder" }],
  2: [{ name: "Terminal", path: "/", icon: "terminal" }],
  3: [{ name: "VSCode", path: "/", icon: "code" }],
  4: [{ name: "Edge", path: "/", icon: "edge" }],
  5: [{ name: "Slack", path: "/", icon: "slack" }],
  6: [{ name: "GitHub", path: "/", icon: "github" }],
  7: [{ name: "LINE", path: "/", icon: "line" }],
  8: [{ name: "Spark", path: "/", icon: "spark" }],
  9: [{ name: "Hyper Launcher", path: "/", icon: "hyper" }],
};

const App: FC<{}> = ({}) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {Object.entries(hotkeyMap).map(([key, apps]) => {
        return (
          <div key={key}>
            {apps.map((app) => {
              return <div key={app.path}>{app.name}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

const rootElm = createRoot(document.getElementById("root")!);
rootElm.render(<App />);
