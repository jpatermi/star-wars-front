import { Result } from '@/interfaces/planets';
import { Skeleton } from "@/components/ui/skeleton";
import { PlanetCard } from "@/app/(welcome)/planets/_components/planet-card";

interface PlanetListProps {
  planets: Result[] | undefined
}
export const PlanetList = ({
 planets
}: PlanetListProps) => {
  return (
    <ul className={"flex flex-wrap justify-around gap-4 px-4 mt-8"}>
      {planets ? (
        planets.map((planet: Result, index: number) => (
          <li key={index}>
            <PlanetCard planet={planet} />
          </li>
        ))
      ) : (
        <div className="flex items-center space-x-4 pt-36">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )}
    </ul>
  )
}
