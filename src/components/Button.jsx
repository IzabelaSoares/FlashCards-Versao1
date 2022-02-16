export default function Button({onButtonClick = null}) {

  
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      className="bg-gray-200 p-2 m-1 rounded-md"
      onClick={handleButtonClick}
    >
     Random Cards
    </button>
  );
}