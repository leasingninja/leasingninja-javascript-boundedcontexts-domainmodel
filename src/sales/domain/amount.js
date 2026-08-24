export class Amount {
    constructor(amountInCents, currency) {
        this._data = {amountInCents: amountInCents, currency: currency};
    }

    static of(amount, currency) {
        return new Amount(Math.round(amount * 100), currency);
    }

    static ofCents(amount_in_cents, currency) {
        return new Amount(amount_in_cents, currency);
    }

    get amount() {return this._data.amountInCents / 100.0;}

    get amountInCents() {return this._data.amountInCents;}

    get currency() {return this._data.currency;}

    equals (other) {
        return this.amountInCents === other.amountInCents && this.currency === other.currency;
    }
}
