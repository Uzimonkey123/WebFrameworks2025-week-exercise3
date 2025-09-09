import { useState } from "react"

function CostCaculator(props: {priceOfSingleVMPerHour: number}) {
    const [amount, setAmount] = useState(0);

    const hourly = (props.priceOfSingleVMPerHour * Number(amount)) || 0;
    const daily = 24 * hourly;
    const monthly = 30 * daily;
    const yearly = 365 * daily;

    return (
        <>
            <h1>VM Cost Calculator</h1>
            <label htmlFor="vmNumber">Number of VMs</label>
            <input type="text" id="vmNumber" placeholder="Number of VMs" value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}/>
            <div>
                <p>Cost per hour: {hourly}</p>
                <p>Cost per day: {daily}</p>
                <p>Cost per month: {monthly}</p>
                <p>Cost per year: {yearly}</p>
            </div>
        </>
    )
}

export default CostCaculator