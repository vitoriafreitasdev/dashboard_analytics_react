/* eslint-disable @typescript-eslint/no-unused-vars */
import { monthlyProfit, monthlySells } from '../dados'

import "./AverageTicket.css"

/*

-Ticket médio => e é calculado dividindo o faturamento total pelo número de vendas ou transações realizadas. 

*/

const AverageTicket = () => {

    const ticket: string[] = []

    for (let i = 0;  i < 12; i ++) {
        const calc = monthlyProfit[i] / monthlySells[i]
        ticket.push(calc.toFixed(2))
    }

    console.log(ticket)



    return (
        <div>
            AverageTicket
        </div>
    )
}

export default AverageTicket