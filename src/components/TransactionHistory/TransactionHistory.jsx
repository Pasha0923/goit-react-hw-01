import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  //   console.log(css);
  return (
    <table className={css.transactionsTable}>
      <thead>
        <tr>
          <th className={css.transactionTitle}>Type</th>
          <th className={css.transactionTitle}>Amount</th>
          <th className={css.transactionTitle}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionInfo}>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={css.transactionDescription}>{item.type}</td>
              <td className={css.transactionDescription}>{item.amount}</td>
              <td className={css.transactionDescription}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
