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

export class EmployeeFlightsContainer {

    // employeeFlightsMap: Map<number, { flights: { employeeName: string, flights: IFlightResponseModel[] } }> = new Map();

    employeeFlightsList: { employeeKey: number, employeeFlights: { employeeName: string, flights: FlightViewModel[] } }[] = [];

    allFlights: IFlightResponseModel[] = [];

    constructor(info: [IEmployeeResponseModel, Array<IFlightResponseModel>][]) {

        info.map((item: [IEmployeeResponseModel, Array<IFlightResponseModel>], index: number) => {

            this.employeeFlightsList.push(
                {
                    employeeKey: item[0].id,
                    employeeFlights:
                    {
                        employeeName: item[0].name,
                        flights: item[1].map(item => new FlightViewModel(item))
                    }
                });

            item[1].map(item => this.allFlights.push(new FlightViewModel(item)));

            // this.employeeFlightsMap.set(item[0].id, { flights: { employeeName: item[0].name, flights: item[1] } });
        });

        // console.log(this.employeeFlightsList);
    };

};