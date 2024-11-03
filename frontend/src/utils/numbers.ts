
type Currency = "$" | "€" | "£";

export const getPriceWithCurrency = (price: number, currency: Currency = "$") => `${currency}${Math.round(price)}`;

const volumeUnits = [
    { value: 1e12, suffix: "T" },
    { value: 1e9, suffix: "B" },
    { value: 1e6, suffix: "M" },
    { value: 1e3, suffix: "K" },
];

export const getLargeNumberWithCurrency = (balance: number, currency: Currency = "$") => {

    for (const { value, suffix } of volumeUnits) {
        if (balance >= value) {
            const volume = value === 1e12 ? (balance / value).toFixed(1) : Math.round(balance / value);
            return currency + volume + suffix;
        }
    }

    return `${currency}${balance}`;
}