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
import { Result } from "@/interfaces/starships";

interface DetailModalProps {
  starship: Result
  children: React.ReactNode;
  onClose: () => void;
}

export const StarshipDetailModal = ({
  starship,
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
          <AlertDialogTitle className={"text-2xl"}>{ starship.name }</AlertDialogTitle>
          <AlertDialogDescription>
            <ul className={"sm:list-disc ml-4"}>
              <li className={"text-lg"}><span className={"font-bold"}>Cargo capacity:</span> {starship.cargo_capacity}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Class:</span> {starship.starship_class}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Crew:</span> {starship.crew}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Consumables:</span> {starship.consumables}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Hyper drive rating:</span> {starship.hyperdrive_rating}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Cost in credit:</span> {starship.cost_in_credits}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Length:</span> {starship.length}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Manufacturer:</span> {starship.manufacturer}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Max atmospheric speed:</span> {starship.max_atmosphering_speed}</li>
              <li className={"text-lg"}><span className={"font-bold"}>MGLT:</span> {starship.MGLT}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Model:</span> {starship.model}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Passengers:</span> {starship.passengers}</li>
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
