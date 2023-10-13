import { Result } from '@/interfaces/people';
import {Skeleton} from "@/components/ui/skeleton";
import {PeopleCard} from "@/app/(welcome)/people/_components/people-card";

interface PeopleListProps {
  people: Result[] | undefined
}
export const PeopleList = ({
 people
}: PeopleListProps) => {
  return (
    <ul className={"flex flex-wrap justify-around gap-4 px-4 mt-8"}>
      {people ? (
        people.map((person: Result, index: number) => (
          <li key={index}>
            <PeopleCard person={person} />
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
