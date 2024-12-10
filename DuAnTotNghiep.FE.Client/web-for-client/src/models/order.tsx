export interface Order {
    userId:    string;
    paymentId: string;
    voucherId: string;
    combos:    Combo[];
    line:      Line[];
}

export interface Combo {
    comboId:  string;
    quantity: number;
}

export interface Line {
    showId: string;
    seatId: string;
}
