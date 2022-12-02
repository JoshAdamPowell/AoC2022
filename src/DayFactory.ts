import Day2 from './2022/Day2';
import Day1 from './2022/Day1';
import Day from './templates/Day';


const DayFactory = (day: string): Day => {
    switch(day) {
        case '1': return new Day1();
        case '2': return new Day2();

        default:
            throw new Error(`Day ${day} not found`);
    }

}

export default DayFactory;