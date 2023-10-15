import "./ListingCard.scss";

interface ListingCardProps {
  csvRow: any;
}

export default function ListingCard(props: ListingCardProps) {
  const rowData = Object.entries(props.csvRow).map(
    ([key, value]: [string, any], index) => {
      // Regular expression to detect URLs starting with "http://" or "https://"
      const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

      let displayedValue: React.ReactNode;
      let backgroundColor: string | undefined;
      let textColor: string | undefined;

      if (typeof value === "string" && urlRegex.test(value)) {
        // If the value is a URL, make it a clickable link
        displayedValue = (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        );
      } else {
        // Otherwise, display the value as text
        displayedValue = value;
      }

      if (key === "Potential") {
        // Check if the key is "Potential" and apply red or green background based on the value
        const potentialValue = parseFloat(value);
        const isNegative = potentialValue < 0;
        backgroundColor = isNegative ? "red" : "green";
        textColor = "white"; // Set the text color to white
      }

      const style = {
        backgroundColor,
        color: textColor,
      };

      return (
        <li className="car-data" key={index} style={style}>
          <strong>{key}:</strong> {displayedValue}
        </li>
      );
    }
  );

  return <ul className="ListingCard">{rowData}</ul>;
}
