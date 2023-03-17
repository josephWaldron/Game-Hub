import platforms from "../data/platforms";

interface Platform {
  //ths might not be needed because it is already defined in useGames.ts
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
