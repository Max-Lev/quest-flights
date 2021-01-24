export class EmployeeResponseModel {
    name: string;
    id: number;
};

export interface IFlightResponseModel {
    duration: number;
    from: string;
    from_date: string;
    from_gate: number;
    num: string;
    plane: string;
    to: string;
    to_date: string;
    to_gate: number;
};

export class FlightViewModel implements IFlightResponseModel {
    duration: number;
    from: string;
    from_date: string;
    from_gate: number;
    num: string;
    plane: string;
    to: string;
    to_date: string;
    to_gate: number;
    'Flight Number': string;
    'Origin': string;
    'Origin Date': string;
    'Destination': string;
    'Destination Date': string;
    isSelected: boolean;
    constructor(model: IFlightResponseModel) {
        Object.assign(this, model);
        this.isSelected = false;
        this['Flight Number'] = model.num;
        this['Origin'] = model.from;
        this['Origin Date'] = model.from_date;
        this['Destination'] = model.to;
        this['Destination Date'] = model.to_date;
    }
};