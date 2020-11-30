import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { VehiclePerson } from "../../../api/VehiclePerson";

export interface PersonProps {
  ownerList?: VehiclePerson[];
}

const Person = ({ ownerList }: PersonProps) => {
  const router = useRouter();
  const [owners, setOwners] = useState(ownerList);

  const loadData = async () => {
    const response = await fetch(
      `http://localhost:4001/vehicles?ownerName=${router.query.person}&vehicle=${router.query.vehicle}`
    );
    const ownersList: VehiclePerson[] | undefined = await response.json();
    setOwners(ownersList);
  };
  useEffect(() => {
    if (ownerList?.length === 0) loadData();
  }, []);

  if (!owners?.[0]) return <div>Loading</div>;

  return <pre>{owners[0]?.details}</pre>;
};

interface CostumNextPageContext extends NextPageContext {
  query: {
    person: string;
    vehicle: string;
  };
}

Person.getInitialProps = async ({ query, req }: CostumNextPageContext) => {
  if (!req) {
    return { ownerList: [] };
  }
  const response = await fetch(
    `http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`
  );
  const ownersList: VehiclePerson[] | undefined = await response.json();
  return { ownerList: ownersList };
};

export default Person;
