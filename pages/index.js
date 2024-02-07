import MainContainer from "@/components/MainContainer";
import MoonIcon from "@/icons/MoonIcon";
import SunIcon from "@/icons/SunIcon";
import { useTheme } from "next-themes";

export default function Home() {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <main className="mx-2 flex h-screen items-center justify-center duration-500">
      <button
        className="absolute top-10 rounded-full border border-zinc-700 p-2 duration-500 hover:bg-zinc-700 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-zinc-700"
        onClick={() => {
          setTheme(resolvedTheme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
      <MainContainer />
    </main>
  );
}
