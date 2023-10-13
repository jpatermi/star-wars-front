"use client"

import starWarsApi from "@/lib/starWarsApi";
import { useState, useEffect } from "react";
import { Film } from '@/interfaces/film';
import { Button } from "@/components/ui/button";
import { FilmList } from "@/app/(welcome)/films/_components/film-list";

export default function FilmHome() {
  const [film, setFilm] = useState<Film>();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getFilm = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const { data } = await starWarsApi.get('/films');
      setFilm(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const next = async () => {
    try {
      setIsLoading(true);
      const newPage = film?.next?.split('=')[1] || '1';
      setPage(+newPage)
      setFilm(undefined)
      const { data } = await starWarsApi.get(`/films/?page=${newPage}`);
      setFilm(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const previous = async () => {
    try {
      setIsLoading(true);
      const newPage = film?.previous?.split('=')[1] || 1;
      setPage(+newPage)
      setFilm(undefined)
      const { data } = await starWarsApi.get(`films/?page=${newPage}`);
      setFilm(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect((): void => {
    getFilm();
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-medium text-sky-700 text-center">
        Films
      </h1>

      <FilmList films={ film?.results } />

      {film && (
      <>
        <p className={"text-center py-8"}>{ `Page ${page} / ${Math.ceil(film?.count / 10)}` }</p>
        <div className={"flex gap-8 justify-center pb-8"}>
          <Button
            variant={ "default" }
            className={ "w-40" }
            onClick={ previous }
            disabled={ !film?.previous || isLoading}
          >
            Previous
          </Button>
          <Button
            variant={"default"}
            className={"w-40"}
            onClick={ next }
            disabled={ !film?.next || isLoading}
          >
            Next
          </Button>
        </div>
      </>
      )}
    </div>
  )
}
