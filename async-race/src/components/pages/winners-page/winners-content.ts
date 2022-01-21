export const winnersContent = (winnerRow: string = '', countWinners: string = '0') => {
  let pageNumber = countWinners === '0' ? 0 : 1;
  let numberOfPages = Math.ceil(+countWinners / 7);
  return `
  <div class="winners">
    <h1 class="winners-title">Winners ( <span>${countWinners}</span> )</h1>
    <h3 class="winners-page-title">Page # <span>${pageNumber} of ${numberOfPages}</span></h3>
  </div>

  <div class="winners-container">
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Car</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Best time (second)</th>
        </tr>
       </thead>
       <tbody>
        ${winnerRow}
       </tbody>
    </table>
  </div>`
}
