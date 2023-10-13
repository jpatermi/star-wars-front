import { Result } from '@/interfaces/film';
import {Skeleton} from "@/components/ui/skeleton";
import {FilmCard} from "@/app/(welcome)/films/_components/film-card";

interface FilmListProps {
  films: Result[] | undefined
}
export const FilmList = ({
 films
}: FilmListProps) => {
  return (
    <ul className={"flex flex-wrap justify-around gap-4 px-4 mt-8"}>
      {films ? (
        films.map((film: Result, index: number) => (
          <li key={index}>
            <FilmCard film={film} />
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
