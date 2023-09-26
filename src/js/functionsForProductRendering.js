import React from "react";
import MonthNameDisplay from "../Components/MonthNameDisplay";

export function renderingBlockDot(product) {
    let className = "block_dot ";

    if(product.isNew === 1) {
        className += "yellow";
    } else {
        className += "black";
    }

    return  <div className={className}></div>
}

export function renderingTextState(product) {
    let className = "text_state ";
    let text = "";

    if(product.isNew === 1) {
        text = "свободен";
        className += "yellow";
    } else {
        className += "black";
        text = "В ремонте";
    }

    return <p className={className}>{text}</p>
}

export function renderingGuaranteeDate(product) {
    let dateWith = product.guarantee.start;
    let dateBy = product.guarantee.end;

    let outDateWith = "";
    let outDateBy = "";

    const yearWith = dateWith.slice(0, dateWith.indexOf("-"));
    const monthWith = dateWith.slice(dateWith.indexOf("-") + 1).slice(0, dateWith.indexOf("-")-2);
    const dayWith = dateWith.slice(dateWith.indexOf("-") + 1).slice(dateWith.indexOf("-")-1, 5);
    outDateWith = dayWith + " / " + monthWith + " / " + yearWith;

    const yearBy = dateBy.slice(0, dateBy.indexOf("-"));
    const monthBy = dateBy.slice(dateBy.indexOf("-") + 1).slice(0, dateBy.indexOf("-")-2);
    const dayBy = dateBy.slice(dateBy.indexOf("-") + 1).slice(dateBy.indexOf("-")-1, 5);
    outDateBy = dayBy + " / " + monthBy + " / " + yearBy;

    return(
        <>
            <div className="block_guarantee_with">
                <p className="text_with">с</p>
                <p className="text_guarantee_with_date">{outDateWith}</p>
            </div>
            <div className="block_guarantee_by">
                <p className="text_by">по</p>
                <p className="text_guarantee_by_date">{outDateBy}</p>
            </div>
        </>
    )
}

export function renderingUsedProduct(product) {
    if(product.isNew === 1) {
        return <p className="text">новый</p>
    } else {
        return <p className="text">Б / У</p>
    }
}

export function outputPrice(product) {
    let topPrice = product.price[0].value;
    let bottomPrice = product.price[1].value;
    let topPriceSymbol;
    let bottomPriceSymbol;

    if(typeof topPriceSymbol !== "string") {
        topPriceSymbol = product.price[0].symbol;
        bottomPriceSymbol = product.price[1].symbol;
    }

    return(
        <>
            <p className="text_top_price">{topPrice} {topPriceSymbol}</p>
            <p className="text_bottom_price">{bottomPrice} {bottomPriceSymbol}</p>
        </>
    );
}

export function renderingTitleGroup(product) {
    let text = "Длинное предлинное длиннючее название группы";

    return <p className="title_group_text">{text}</p>
}

export function renderingTitleOrders(product) {
    return <p className="title_orders_text">{product.title}</p>
}

export function outputDate(product) {
    const date = product.date;
    let topDate = "";
    let bottomDate = "";

    const year = date.slice(0, date.indexOf("-"));
    const month = date.slice(date.indexOf("-") + 1).slice(0, date.indexOf("-")-2);
    const day = date.slice(date.indexOf("-") + 1).slice(date.indexOf("-")-1, 5);

    topDate = month + " / " + year.slice(2, year.length);

    bottomDate = day + " / ";
    if(month.slice(0, 1) === "0") {
        bottomDate += MonthNameDisplay(Number(month.slice(1)));
    } else {
        bottomDate += MonthNameDisplay(Number(month));
    }
    bottomDate = bottomDate + " / "  + year;

    return(
        <>
            <p className="text_top_date">{topDate}</p>
            <p className="text_bottom_date">{bottomDate}</p>
        </>
    );
}