const MonthNameDisplay = (props) => {
    function monthNameDisplay(month) {
        if(month === 1) {
            return "Янв";
        }
        if(month === 2) {
            return "Фев";
        }
        if(month === 3) {
            return "Мар";
        }
        if(month === 4) {
            return "Апр";
        }
        if(month === 5) {
            return "Май";
        }
        if(month === 6) {
            return "Июн";
        }
        if(month === 7) {
            return "Июл";
        }
        if(month === 8) {
            return "Авг";
        }
        if(month === 9) {
            return "Сен";
        }
        if(month === 10) {
            return "Окт";
        }
        if(month === 11) {
            return "Ноя";
        }
        if(month === 12) {
            return "Дек";
        }
    }
    return (monthNameDisplay(props));
};

export default MonthNameDisplay;