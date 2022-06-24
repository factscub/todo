
const FilterTasks = (data, type) => {
    let time = ''
    const array = []
    const date = new Date();
    const today = date.getDate()
    const thisMonth = date.getMonth() + 1
    const thisYear = Number(date.getFullYear().toString().substring(2, 4))

        for (const key in data) {
            const date = data[key].date

            let [day, month, year] = date.split('/')
            day = parseInt(day);
            month = parseInt(month);
            year = parseInt(year)
            time = data.date
            if (year === thisYear && month === thisMonth) {
                if (day === today) time = 'Today'
                else if (day < today) time = "Overdue"
                else if (day === today + 1) time = "Tomorrow"
                else time = 'Remaining'
            }

            if(type===undefined){
                array.push({newData:data[key], time:time})
            }
            if (type === 'Today' || type === 'Overdue' || type === 'Remaining' || type === 'Tomorrow') {

            if (type === time) array.push({newData:data[key],time:time})

        }
        else if (type === 'Personal' || type === 'Home' || type === 'Office') {
            if (data[key].type === type) array.push({newData:data[key],time:time})

        }
        else if(type==='search'){
            array.push({newData:data[key],time:"Search result"})

        }

    }


    return array

}

export default FilterTasks
