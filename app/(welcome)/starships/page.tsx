"use client"

import starWarsApi from "@/lib/starWarsApi";
import { useState, useEffect } from "react";
import { Starship } from '@/interfaces/starships';
import { Button } from "@/components/ui/button";
import { StarshipList } from "@/app/(welcome)/starships/_components/starship-list";

export default function StarshipHome() {
  const [starship, setStarship] = useState<Starship>();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getStarships = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const { data } = await starWarsApi.get('/starships');
      setStarship(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const next = async () => {
    try {
      setIsLoading(true);
      const newPage = starship?.next?.split('=')[1] || '1';
      setPage(+newPage)
      setStarship(undefined)
      const { data } = await starWarsApi.get(`/starships/?page=${newPage}`);
      setStarship(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const previous = async () => {
    try {
      setIsLoading(true);
      const newPage = starship?.previous?.split('=')[1] || 1;
      setPage(+newPage)
      setStarship(undefined)
      const { data } = await starWarsApi.get(`starships/?page=${newPage}`);
      setStarship(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect((): void => {
    getStarships();
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-medium text-sky-700 text-center">
        Starships
      </h1>

      <StarshipList starships={ starship?.results } />

      {starship && (
      <>
        <p className={"text-center py-8"}>{ `Page ${page} / ${Math.ceil(starship?.count / 10)}` }</p>
        <div className={"flex gap-8 justify-center pb-8"}>
          <Button
            variant={ "default" }
            className={ "w-40" }
            onClick={ previous }
            disabled={ !starship?.previous || isLoading}
          >
            Previous
          </Button>
          <Button
            variant={"default"}
            className={"w-40"}
            onClick={ next }
            disabled={ !starship?.next || isLoading}
          >
            Next
          </Button>
        </div>
      </>
      )}
    </div>
  )
}
