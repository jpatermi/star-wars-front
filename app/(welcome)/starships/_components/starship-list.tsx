import { Result } from '@/interfaces/starships';
import { Skeleton } from "@/components/ui/skeleton";
import { StarshipCard } from "@/app/(welcome)/starships/_components/starship-card";

interface StarshipListProps {
  starships: Result[] | undefined
}
export const StarshipList = ({
 starships
}: StarshipListProps) => {
  return (
    <ul className={"flex flex-wrap justify-around gap-4 px-4 mt-8"}>
      {starships ? (
        starships.map((starship: Result, index: number) => (
          <li key={index}>
            <StarshipCard starship={starship} />
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
