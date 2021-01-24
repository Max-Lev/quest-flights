import { FlightViewModel, EmployeeResponseModel, IFlightResponseModel } from './employees-flights-response.model';



export class EmployeeFlights {
    employeeName: string;
    flights: FlightViewModel[] = [];
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

    allEmloyees: EmployeeResponseModel[] = [];

    employeeFlightsList: EmployeeFlightsJoinListModel[] = [];

    allFlights: FlightViewModel[] = [];

    constructor(info: [EmployeeResponseModel, IFlightResponseModel[]][]) {

        info.map((item: [EmployeeResponseModel, IFlightResponseModel[]], index: number) => {

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

    private setAllFlights(item: [EmployeeResponseModel, IFlightResponseModel[]]) {
        item[1].map(flight => this.allFlights.push(new FlightViewModel(flight)));
    };

};