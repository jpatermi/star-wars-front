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
import { Result } from "@/interfaces/planets";

interface DetailModalProps {
  planet: Result
  children: React.ReactNode;
  onClose: () => void;
}

export const PlanetDetailModal = ({
  planet,
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
          <AlertDialogTitle className={"text-2xl"}>{ planet.name }</AlertDialogTitle>
          <AlertDialogDescription>
            <ul className={"sm:list-disc ml-4"}>
              <li className={"text-lg"}><span className={"font-bold"}>Gravity:</span> {planet.gravity}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Climate:</span> {planet.climate}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Diameter:</span> {planet.diameter}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Orbital period:</span> {planet.orbital_period}</li>
              <li className={"text-lg"}><span className={"font-bold"}>population:</span> {planet.population}</li>
              <li className={"text-lg"}><span className={"font-bold"}>rotation period:</span> {planet.rotation_period}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Surface water:</span> {planet.surface_water}</li>
              <li className={"text-lg"}><span className={"font-bold"}>Terrain:</span> {planet.terrain}</li>
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
