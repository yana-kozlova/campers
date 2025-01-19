export interface ICamper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: Array<{
    thumb: string;
    original: string;
  }>;
  reviews: Array<{
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }>;
}

export interface CampersState {
  campers: {
    items: ICamper[] | [];
    total: number;
  };
  selectedCamper: ICamper | null;
  isLoading: boolean;
  isFetched: boolean;
  error: string | null;
}
