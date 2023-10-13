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
import { Result } from "@/interfaces/film";

interface DetailModalProps {
  film: Result
  children: React.ReactNode;
  onClose: () => void;
}

export const FilmDetailModal = ({
  film,
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
          <AlertDialogTitle className={"text-2xl"}>{ film.title }</AlertDialogTitle>
          <AlertDialogDescription>
            <ul className={"sm:list-disc ml-4"}>
              <li className={"text-lg"}><span className={"font-bold"}>Director:</span> {film.director}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Opening:</span> {film.opening_crawl}</li>
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
