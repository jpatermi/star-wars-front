import { Result } from '@/interfaces/films';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { FilmDetailModal } from "@/app/(welcome)/films/_components/film-detail-modal";

interface FilmCardProps {
  film: Result
}
export const FilmCard = ({
  film
}: FilmCardProps) => {
  return (
        <FilmDetailModal
          film={ film }
          onClose={ () => {} }
        >
          <Card className={"w-[300px] text-center"}>
            <CardHeader>
              <CardTitle className={"text-sky-900"}>{ film.title }</CardTitle>
              <CardDescription className={"text-lg"}>Release: { film.release_date }</CardDescription>
            </CardHeader>
          </Card>
        </FilmDetailModal>
  )
}
