import styles from "./ListRow.module.css";

function getOrderTimestamp(id, arr){
  for (const obj of arr) {
    if (obj["&id"] === id) {
      return obj.timestamps;
    }
  }
  return null;
}

const ListCell = ({ timestamps,children,setSelectedOrderTimeStamps,setSelectedOrderDetails,row }) => {
  function clickHandler() {
    setSelectedOrderTimeStamps(getOrderTimestamp(children[0].props.children,timestamps.results));
    setSelectedOrderDetails(row.executionDetails);
    
  }
  return <tr onClick={clickHandler} className={styles.cell}>{children}</tr>;
};

export default ListCell;