import { Result } from '@/interfaces/people';

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { PeopleDetailModal } from "@/app/(welcome)/people/_components/people-detail-modal";

interface PeopleCardProps {
  person: Result
}
export const PeopleCard = ({
  person
}: PeopleCardProps) => {
  return (
        <PeopleDetailModal
          person={ person }
          onClose={ () => {} }
        >
          <Card className={"w-[300px] text-center"}>
            <CardHeader>
              <CardTitle className={"text-sky-900"}>{ person.name }</CardTitle>
            </CardHeader>
          </Card>
        </PeopleDetailModal>
  )
}
