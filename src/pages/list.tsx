import Link from "next/link";
import { VehiclePerson } from "../../api/VehiclePerson";

export interface ListProps {
  ownerList?: VehiclePerson[];
}

const List = ({ ownerList }: ListProps) => {
  return (
    <div>
      {ownerList?.map((e, i) => (
        <div key={i.toString()}>
          <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {e.ownerName}'s' {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

List.getInitialProps = async () => {
  const response = await fetch("http://localhost:4001/vehicles");
  const ownersList: VehiclePerson[] | undefined = await response.json();
  return { ownerList: ownersList };
};

export default List;
