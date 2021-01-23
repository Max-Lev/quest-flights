export interface IEmployeeResponseModel {
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
    'Destination': string
    'Destination Date': string
    constructor(model: IFlightResponseModel) {
        Object.assign(this, model);
        this['Flight Number'] = model.num;
        this['Origin'] = model.from;
        this['Origin Date'] = model.from_date;
        this['Destination'] = model.to;
        this['Destination Date'] = model.to_date;
    }
};


export class EmployeeFlightsResponseModel$ {

    employeesList: IEmployeeResponseModel;

    flightList: IFlightResponseModel[] = [];

};

export class EmployeeFlights {
    employeeName: string;
    flights: FlightViewModel[];
    constructor(model: EmployeeFlights) {
        this.employeeName = model.employeeName;
        this.flights = model.flights;
    }
}

export class EmployeeFlightsJoinListModel {
    employeeKey: number;
    employeeFlights: EmployeeFlights;
    constructor(key: number, flight: EmployeeFlights) {
        this.employeeKey = key;
        this.employeeFlights = new EmployeeFlights(flight);
    }
};

export class EmployeeFlightsContainer {

    allEmloyees: IEmployeeResponseModel[] = [];

    employeeFlightsList: EmployeeFlightsJoinListModel[] = [];

    allFlights: IFlightResponseModel[] = [];

    constructor(info: [IEmployeeResponseModel, IFlightResponseModel[]][]) {

        info.map((item: [IEmployeeResponseModel, IFlightResponseModel[]], index: number) => {

            this.employeeFlightsList.push
                (
                    new EmployeeFlightsJoinListModel(
                        item[0].id,
                        {
                            employeeName: item[0].name,
                            flights: item[1].map(item => new FlightViewModel(item))
                        }
                    )
                );

            this.setAllFlights(item);

        });
    };

    private setAllFlights(item: [IEmployeeResponseModel, IFlightResponseModel[]]) {
        item[1].map(flight => this.allFlights.push(new FlightViewModel(flight)));
    };

};