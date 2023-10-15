import "./ListingCard.scss";

interface ListingCardProps {
  csvRow: any;
}

export default function ListingCard(props: ListingCardProps) {
  const rowData = Object.entries(props.csvRow).map(
    ([key, value]: [string, any], index) => {
      return (
        <li className="car-data" key={index}>
          <strong>{key}:</strong> {value}
        </li>
      );
    }
  );

  return (
    <ul className="ListingCard">
      {rowData}
      {/* <p>Potential: {props.csvRow["Potential"]}</p>
      <p>Body type: {props.csvRow["Body type"]}</p>
      <p>Make: {props.csvRow.make}</p>
      <p>Build Year: {props.csvRow.buildYear}</p>
      <p>Fuel: {props.csvRow.fuel}</p>
      <p>Gearbox: {props.csvRow.gearbox}</p>
      <p>Price: {props.csvRow.price}</p> */}
    </ul>
  );
}
