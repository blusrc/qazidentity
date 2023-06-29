const CamryCounter = ({ number }: { number: number }) => {
  const wholeNumber = Math.floor(number);
  const decimalPart = number % 1;
  const images = [];

  // Add whole images
  for (let i = 0; i < wholeNumber; i++) {
    images.push(
      <div className="bg-slate-100 p-2 rounded">
        <div className="w-full">
          <img
            src="/camry.png"
            key={`apple-${i}`}
            alt="Camry"
          />
        </div>
      </div>
    );
  }

  // Calculate the width of the partial image based on decimal part
  const partialWidth = `${100 - Math.ceil(decimalPart * 100)}%`;
  console.log(partialWidth);

  // Add partial image if decimal part is not zero
  if (decimalPart > 0) {
    images.push(
      <div className="bg-slate-100 rounded p-2">
        <div className={`relative`}>
          <img
            src="/camry.png"
            key={`camry-partial`}
            alt="Camry"
            className=""
          />
          <div
            className="absolute right-0 top-0 h-full bg-slate-100"
            style={{ width: partialWidth }}
          ></div>
        </div>
      </div>
    );
  }

  return <div className="grid grid-cols-3 gap-4">{images}</div>;
};

export default CamryCounter;
