

function solver(input: string):string
{
    let nums = input.split(' ');
    let entries :Entry[] = [];

    for(let i = 0; i < nums.length; i++)
    {
        let num = nums[i];
        let weight = 0;

        for(var j = 0; j < num.length; j++)
        {
            let digit = parseInt(num[j]);
            weight += digit;
        }


        entries.push( new Entry(num, weight));
    }

    entries = entries.sort(EntryComparer);

    let output = "";

    for(let i = 0; i < entries.length; i++)
    {
        if(i == entries.length - 1)
            output += entries[i].number;
        else
            output += entries[i].number + " ";
    }

    return output;
}

function EntryComparer(e1: Entry, e2: Entry)
{
    if(e1.weigth !== e2.weigth)
        return e1.weigth - e2.weigth;
    return e1.number.localeCompare(e2.number);
}

class Entry
{
    weigth: number;
    number:string;

    constructor(number: string, weight: number)
    {
        this.number = number;
        this.weigth = weight;
    }
}

export default solver;