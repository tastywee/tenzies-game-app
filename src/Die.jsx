export default function Die(props) {
  const styles = { backgroundColor: props.isHeld ? "#FFA500  " : "#FFFFFF" };
  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="die"
      style={styles}
      onClick={props.onClick}
      onMouseDown={handleMouseDown}
    >
      {props.value}
    </div>
  );
}
