import { Result } from '@/interfaces/planets';

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { PlanetDetailModal } from "@/app/(welcome)/planets/_components/planet-detail-modal";

interface PlanetCardProps {
  planet: Result
}
export const PlanetCard = ({
  planet
}: PlanetCardProps) => {
  return (
        <PlanetDetailModal
          planet={ planet }
          onClose={ () => {} }
        >
          <Card className={"w-[300px] text-center"}>
            <CardHeader>
              <CardTitle className={"text-sky-900"}>{ planet.name }</CardTitle>
            </CardHeader>
          </Card>
        </PlanetDetailModal>
  )
}
