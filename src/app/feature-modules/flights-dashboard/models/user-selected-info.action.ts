import { FlightViewModel, IEmployeeResponseModel } from './employee-flights-container.model';

export interface UserSelectedInfoAction {
    cntrl: string;
    payload: IEmployeeResponseModel | FlightViewModel;
}