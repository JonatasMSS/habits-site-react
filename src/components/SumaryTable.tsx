import { useEffect, useState } from "react";
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";
import { HabitDay } from "./HabitDay";
import { api } from "../lib/axios";
import dayjs from "dayjs";

const weekDays = [
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S'
]


const sumaryDates = generateRangeDatesFromYearStart();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - sumaryDates.length;


type Summary = {
    id: string,
    date: string,
    amount: number,
    completed: number
}[];


export function SumaryTable() {

    const [summary, setSummary] = useState<Summary>([])


    useEffect(() => {
        //Deixando a array vazia, executará a função apenas uma vez

        api.get('summary')
            .then(response => {
               
                setSummary(response.data);
                
            });
            
    }, []);

    return (
        <div className="w-full flex ">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {
                    weekDays.map((day, i) => {
                        return (
                            <div key={`${day}-${i}`} className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center">
                                {day}
                            </div>
                        )
                    },)
                }
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-3 ">
                {
                    summary.length > 0 && sumaryDates.map(date => {

                        const dayInSummary =summary.find(day => {
                            return dayjs(date).isSame(day.date,'day')
                        })

                        return <HabitDay
                        
                            amount={dayInSummary?.amount}
                            date = {date}
                            defaultCompleted={dayInSummary?.completed}
                            key={date.toString()}
                        />
                    })
                }
                {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
                    return (
                        <div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"></div>
                    )
                })}
            </div>
        </div>
    );
}