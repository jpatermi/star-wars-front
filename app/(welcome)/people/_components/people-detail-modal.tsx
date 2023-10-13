"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Result } from "@/interfaces/people";

interface DetailModalProps {
  person: Result
  children: React.ReactNode;
  onClose: () => void;
}

export const PeopleDetailModal = ({
  person,
  children,
  onClose
}: DetailModalProps) => {
  return (
    <div className={"cursor-pointer border-2 border-sky-200 rounded-lg"}>
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className={"text-2xl"}>{ person.name }</AlertDialogTitle>
          <AlertDialogDescription>
            <ul className={"sm:list-disc ml-4"}>
              <li className={"text-lg"}><span className={"font-bold"}>Birth year:</span> {person.birth_year}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Eye color:</span> {person.eye_color}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Hair color:</span> {person.hair_color}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Gender:</span> {person.gender}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Height:</span> {person.height}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Mass:</span> {person.mass}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Skin color:</span> {person.skin_color}</li>
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  );
};
