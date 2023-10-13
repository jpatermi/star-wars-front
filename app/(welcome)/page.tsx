import { Logo } from "@/app/(welcome)/_components/logo";

export default function DashboardHome() {
  return (
    <div className={"max-w-5xl px-4"}>
      <h1 className="text-3xl font-medium text-sky-700 text-center">
        Welcome to my Star Wars tech test!
      </h1>

      <Logo width={350}/>
      
      <h3 className={"text-lg font-bold text-center"}>By Juan Patermina</h3>
    </div>
  )
}
