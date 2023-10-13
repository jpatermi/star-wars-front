"use client"

import starWarsApi from "@/lib/starWarsApi";
import { useState, useEffect } from "react";
import { Planet } from '@/interfaces/planets';
import { Button } from "@/components/ui/button";
import { PlanetList } from "@/app/(welcome)/planets/_components/planet-list";

export default function PlanetHome() {
  const [planet, setPlanet] = useState<Planet>();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getPlanets = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const { data } = await starWarsApi.get('/planets');
      setPlanet(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const next = async () => {
    try {
      setIsLoading(true);
      const newPage = planet?.next?.split('=')[1] || '1';
      setPage(+newPage)
      setPlanet(undefined)
      const { data } = await starWarsApi.get(`/planets/?page=${newPage}`);
      setPlanet(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const previous = async () => {
    try {
      setIsLoading(true);
      const newPage = planet?.previous?.split('=')[1] || 1;
      setPage(+newPage)
      setPlanet(undefined)
      const { data } = await starWarsApi.get(`planets/?page=${newPage}`);
      setPlanet(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect((): void => {
    getPlanets();
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-medium text-sky-700 text-center">
        Planet
      </h1>

      <PlanetList planets={ planet?.results } />

      {planet && (
      <>
        <p className={"text-center py-8"}>{ `Page ${page} / ${Math.ceil(planet?.count / 10)}` }</p>
        <div className={"flex gap-8 justify-center pb-8"}>
          <Button
            variant={ "default" }
            className={ "w-40" }
            onClick={ previous }
            disabled={ !planet?.previous || isLoading}
          >
            Previous
          </Button>
          <Button
            variant={"default"}
            className={"w-40"}
            onClick={ next }
            disabled={ !planet?.next || isLoading}
          >
            Next
          </Button>
        </div>
      </>
      )}
    </div>
  )
}
