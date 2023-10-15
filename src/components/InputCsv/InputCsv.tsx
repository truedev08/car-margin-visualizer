import Papa from "papaparse";

interface InputCsvProps {
  setCsvData: any;
}

export default function InputCsv(props: InputCsvProps) {
  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          //console.log("CSV Data:", result.data);
          props.setCsvData(result.data);
        },
        header: true, // Set this to true if the first row contains headers
        skipEmptyLines: true,
      });
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileInputChange} />
    </div>
  );
}
