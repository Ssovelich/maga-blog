'use client';

import { ERRORS } from "./errors";

export default function HomePageErroe ({ error }: { error: Error }) {
    if (error.message === ERRORS.NOT_FOUND) {
  return <>Articles not found</>;
}
return <>Something went wrong</>
}

