import type { PageLoad } from './$types';
import * as popData from "$lib/pop_data";

export const load: PageLoad = ({ params }) => {
  return {
    popData
  }
}
