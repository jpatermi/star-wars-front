"use client"

import starWarsApi from "@/lib/starWarsApi";
import { useState, useEffect } from "react";
import { People } from '@/interfaces/people';
import { Button } from "@/components/ui/button";
import { PeopleList } from "@/app/(welcome)/people/_components/people-list";

export default function PeopleHome() {
  const [people, setPeople] = useState<People>();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getPeople = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const { data } = await starWarsApi.get('/people');
      setPeople(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const next = async () => {
    try {
      setIsLoading(true);
      const newPage = people?.next?.split('=')[1] || '1';
      setPage(+newPage)
      setPeople(undefined)
      const { data } = await starWarsApi.get(`/people/?page=${newPage}`);
      setPeople(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const previous = async () => {
    try {
      setIsLoading(true);
      const newPage = people?.previous?.split('=')[1] || 1;
      setPage(+newPage)
      setPeople(undefined)
      const { data } = await starWarsApi.get(`people/?page=${newPage}`);
      setPeople(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect((): void => {
    getPeople();
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-medium text-sky-700 text-center">
        People
      </h1>

      <PeopleList people={ people?.results } />

      {people && (
      <>
        <p className={"text-center py-8"}>{ `Page ${page} / ${Math.ceil(people?.count / 10)}` }</p>
        <div className={"flex gap-8 justify-center pb-8"}>
          <Button
            variant={ "default" }
            className={ "w-40" }
            onClick={ previous }
            disabled={ !people?.previous || isLoading}
          >
            Previous
          </Button>
          <Button
            variant={"default"}
            className={"w-40"}
            onClick={ next }
            disabled={ !people?.next || isLoading}
          >
            Next
          </Button>
        </div>
      </>
      )}
    </div>
  )
}
