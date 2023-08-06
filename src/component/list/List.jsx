import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
// import { useState } from "react";

function getOrderSubmitted(id, arr){
  for (const obj of arr) {
    if (obj["&id"] === id) {
      return obj.timestamps.orderSubmitted;
    }
  }
  return null;
}

const List = ({ rows,timestamps,currency,setSelectedOrderTimeStamps,setSelectedOrderDetails, searchText }) => {


  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
          <ListRow timestamps={timestamps} setSelectedOrderTimeStamps={setSelectedOrderTimeStamps} setSelectedOrderDetails={setSelectedOrderDetails} row={row} key={Math.random()}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{getOrderSubmitted(row["&id"],timestamps.results)}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
