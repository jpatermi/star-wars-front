import { Result } from '@/interfaces/starships';

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { StarshipDetailModal } from "@/app/(welcome)/starships/_components/starship-detail-modal";

interface StarshipCardProps {
  starship: Result
}
export const StarshipCard = ({
  starship
}: StarshipCardProps) => {
  return (
        <StarshipDetailModal
          starship={ starship }
          onClose={ () => {} }
        >
          <Card className={"w-[300px] text-center"}>
            <CardHeader>
              <CardTitle className={"text-sky-900"}>{ starship.name }</CardTitle>
            </CardHeader>
          </Card>
        </StarshipDetailModal>
  )
}
