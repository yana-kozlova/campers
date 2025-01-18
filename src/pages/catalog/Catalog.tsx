import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCatalog } from "../../redux/catalog/operations";
import {
  selectAllCampers,
  selectCampersFetched,
  selectCampersLoading,
} from "../../redux/catalog/selectors.tsx";

const CampersList: React.FC = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectAllCampers);
  const isLoading = useSelector(selectCampersLoading);
  const isFetched = useSelector(selectCampersFetched);
  const error = useSelector((state: any) => state.campers.error);

  useEffect(() => {
    if (!isFetched) {
      dispatch(getCatalog());
    }
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Campers List</h1>
      <ul>
        {campers?.item?.map((camper) => <li key={camper.id}>{camper.name}</li>)}
      </ul>
    </div>
  );
};

export default CampersList;
