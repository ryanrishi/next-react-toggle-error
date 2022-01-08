import { useTheme } from "next-themes";
import Toggle from "react-toggle";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      checked={theme === "dark"}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
}
